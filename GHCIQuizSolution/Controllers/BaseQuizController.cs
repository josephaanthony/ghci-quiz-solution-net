using GHCIQuizSolution.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GHCIQuizSolution.Controllers
{
  public class BaseQuizController : BaseAPIController
  {
    protected static class QUIZ_STATUS {
      public static String IN_PROGRESS = "IN_PROGRESS";
      public static String COMPLETED_SUCCESS = "COMPLETED_SUCCESS";
      public static String COMPLETED_FAIL = "COMPLETED_FAIL";
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
        quizUser.CurrentUserQuiz.status = QUIZ_STATUS.COMPLETED_SUCCESS.ToString();
      }
    }

    protected void SetNextQuiz(QuizUser quizUser)
    {
      Quiz quiz;

      if (quizUser.CurrentUserQuiz == null)
      {
        quiz = QuizDB.Quizs.OrderBy(q => q.level).FirstOrDefault();
      }
      else
      {
        quiz = QuizDB.Quizs
                .OrderBy(q => q.level)
                .Where(q => q.level > quizUser.CurrentUserQuiz.Quiz.level)
                .FirstOrDefault();
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
        status = QUIZ_STATUS.IN_PROGRESS.ToString()
      };
      quizUser.UserQuizs.Add(quizUser.CurrentUserQuiz);

      int indexCounter = 0;
      foreach (var item in quizUser.CurrentUserQuiz.Quiz.Questions)
      {
        quizUser.CurrentUserQuiz.UserQuestions.Add(new UserQuestion()
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
            QuizOptions = user.CurrentUserQuestion.Question.QuizOptions.Select(quizOption => new
            {
              quizOption.description,
              quizOption.id,
              quizOption.isCorrect,
            })
          },
          user.CurrentUserQuestion.questionId,
          user.CurrentUserQuestion.selectedOptionIds
        };
      }
      else {
        return null;
      }
    }

  }
}
