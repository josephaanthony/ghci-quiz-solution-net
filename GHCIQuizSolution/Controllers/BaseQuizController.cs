using GHCIQuizSolution.DBContext;
using GHCIQuizSolution.Models.FromDBContext;
using Newtonsoft.Json;
using NLog;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace GHCIQuizSolution.Controllers
{
  public class BaseQuizController : BaseAPIController
  {
    protected static Logger logger = LogManager.GetCurrentClassLogger();

    protected static class QUIZ_STATUS {
      public static String IN_PROGRESS = "IN_PROGRESS";
      public static String COMPLETED_SUCCESS = "COMPLETED_SUCCESS";
      public static String COMPLETED_FAIL = "COMPLETED_FAIL";
    }

    private Dictionary<String, int> COMPLEXITY_POINT = new  Dictionary<string, int> {
      { "EASY", 1 },
      { "MEDIUM", 2 },
      { "COMPLEX", 3 },
      { "GROUP", 1 }
    };
    protected String[] QUESTION_COMPLEXITITES = { "COMPLEX", "MEDIUM", "EASY", "GROUP" };
    protected String[] QUESTION_OPTION_TYPE = { "Radio", "Checkbox", "Text" };

    protected List<Action> SetImageUrl(IFileBased sourceQuestion, IFileBased targetQuestion)
    {
      List<Action> fileListToDelete = new List<Action>();

      if (sourceQuestion.file != null)
      {
        if (!sourceQuestion.file.isDeleted)
        {
          if (String.IsNullOrWhiteSpace(targetQuestion.id))
          {
            targetQuestion.id = Guid.NewGuid().ToString();
          }

          fileListToDelete.Add(() => File.Delete(FILE_IMAGE_PATH + "/" + targetQuestion.id + sourceQuestion.file.ext));
          fileListToDelete.Add(() => File.Move(FILE_TEMP_PATH + "/" + sourceQuestion.file.fileName, FILE_IMAGE_PATH + "/" + targetQuestion.id + sourceQuestion.file.ext));
          targetQuestion.imageUrl = targetQuestion.id + sourceQuestion.file.ext;
        }
        else
        {
          if (targetQuestion.imageUrl != null)
          {
            fileListToDelete.Add(() => File.Delete(FILE_IMAGE_PATH + "/" + targetQuestion.imageUrl));
            targetQuestion.imageUrl = null;
          }
        }
      }
      else
      {
        targetQuestion.imageUrl = sourceQuestion.imageUrl;
      }

      return fileListToDelete;
    }


    protected void SetNextQuestion(QuizUser quizUser)
    {
      UserQuestion userQuestion;

      if(quizUser.CurrentUserQuiz == null) {
        return;
      }

      if (quizUser.CurrentUserQuestion == null)
      {
        userQuestion = quizUser.CurrentUserQuiz.UserQuestions
                          .OrderBy(q => q.index)
                          .FirstOrDefault();
      }
      else
      {
        userQuestion = quizUser.CurrentUserQuiz.UserQuestions
                  .OrderBy(q => q.index)
                  .Where(q => q.index > quizUser.CurrentUserQuestion.index)
                  .FirstOrDefault();
      }

      //quizUser.isLastQuestionForCurrentQuiz = userQuestion == null;
      quizUser.CurrentUserQuestion = userQuestion;

      if(quizUser.CurrentUserQuestion == null) {
        this.SetQuizStatus(quizUser);
      }
    }

    private void SetQuizStatus(QuizUser quizUser) {
      int passPoint = quizUser.CurrentUserQuiz.Quiz.passpoint.GetValueOrDefault();

      int acquiredPoint = quizUser.CurrentUserQuiz.UserQuestions.Sum(q => {
        if(q.isCorrect.GetValueOrDefault() && COMPLEXITY_POINT.ContainsKey(q.Question.complexity)) {
          return COMPLEXITY_POINT[q.Question.complexity];
        }
        else {
          return 0;
        }
      });

      quizUser.CurrentUserQuiz.status = acquiredPoint >= passPoint ? QUIZ_STATUS.COMPLETED_SUCCESS.ToString() : QUIZ_STATUS.COMPLETED_FAIL.ToString();
    }

    protected void SetNextQuiz(QuizUser quizUser)
    {
      Quiz quiz;
      int attemptNo = 0;

      if (quizUser.CurrentUserQuiz == null)
      {
        quiz = QuizDB.Quizs.OrderBy(q => q.level).FirstOrDefault();
      }
      else if(quizUser.CurrentUserQuiz.status == QUIZ_STATUS.COMPLETED_SUCCESS)
      {
        quiz = QuizDB.Quizs
                .OrderBy(q => q.level)
                .Where(q => q.level > quizUser.CurrentUserQuiz.Quiz.level)
                .FirstOrDefault();
      }
      else if (quizUser.CurrentUserQuiz.status == QUIZ_STATUS.COMPLETED_FAIL)
      {
        // Reset the CurrentQuiz;
        quiz = quizUser.CurrentUserQuiz.Quiz;
        attemptNo = quizUser.CurrentUserQuiz.attempt.GetValueOrDefault() + 1;
      }
      else {
        throw new NotImplementedException();
      }

      if (quiz  ==  null)
      {
        quizUser.isLastQuiz = true;
        quizUser.CurrentUserQuiz = null;
        quizUser.CurrentUserQuestion = null;
        return;
      }

      //quizUser.isLastQuiz = quizList.Count() == 1;
      quizUser.CurrentUserQuiz = new UserQuiz()
      {
        Quiz = quiz,
        status = QUIZ_STATUS.IN_PROGRESS.ToString(),
        attempt = attemptNo
      };
      quizUser.UserQuizs.Add(quizUser.CurrentUserQuiz);

      this.GenerateQuizQuestions(quizUser.CurrentUserQuiz);
    }

    public class ComplexityComposition {
      public String level;
      public int nos;
    }


    private void GenerateQuizQuestions(UserQuiz userQuiz) {
      Random random = new Random();
      var complexityCompArr = JsonConvert.DeserializeObject<ComplexityComposition[]>(userQuiz.Quiz.complexityComposition);
      List<Question> questionList = new List<Question>();
      List<Question> randomList = new List<Question>();

      // Apply Group logic
      if(complexityCompArr.Any(c => "GROUP".Equals(c.level))) {
        var questionGroup = userQuiz.Quiz.Questions.GroupBy(q => q.groupName);
        var index = random.Next(0, questionGroup.Count());
        randomList = questionGroup.ElementAt(index).OrderBy(q => q.index).ToList();
      }
      else {
        foreach (var comp in complexityCompArr)
        {
          questionList.AddRange(userQuiz.Quiz.Questions
            .Where(q => q.complexity == comp.level)
            .Take(comp.nos));
        }

        while (questionList.Count != 0)
        {
          var index = random.Next(0, questionList.Count);
          randomList.Add(questionList[index]);
          questionList.RemoveAt(index);
        }
      }

      int indexCounter = 0;
      foreach (var item in randomList)
      {
        userQuiz.UserQuestions.Add(new UserQuestion()
        {
          index = indexCounter++,
          Question = item,
        });
      }
    }

    protected Object GetCurrentUserQuestionForReturn(QuizUser user)
    {
      if(user.CurrentUserQuestion != null) {
        return new
        {
          user.CurrentUserQuestion.id,
          user.CurrentUserQuestion.index,
          user.CurrentUserQuestion.isCorrect,
          Question = new
          {
            user.CurrentUserQuestion.Question.description,
            user.CurrentUserQuestion.Question.id,
            user.CurrentUserQuestion.Question.optionType,
            user.CurrentUserQuestion.Question.imageUrl,
            QuizOptions = user.CurrentUserQuestion.Question.QuizOptions.Select(quizOption => new
            {
              quizOption.description,
              quizOption.id,
              quizOption.isCorrect,
              quizOption.index
            })
            .OrderBy(quizOption => quizOption.index)
          },
          user.CurrentUserQuestion.questionId,
          user.CurrentUserQuestion.selectedOptionIds
        };
      }
      else {
        return null;
      }
    }


    protected void CheckLength(String value, int len, String message, List<String> messageList)
    {
      if (String.IsNullOrWhiteSpace(value) || value.Length < len)
      {
        messageList.Add(message);
      }
    }

    protected void CheckInArray(String value, String[] arr, String message, List<String> messageList)
    {
      if (!arr.Contains(value))
      {
        messageList.Add(message);
      }
    }


  }
}
