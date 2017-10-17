using GHCIQuizSolution.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using System.Web.Http.Results;
using Newtonsoft.Json;

namespace GHCIQuizSolution.Controllers
{
  public class QuizUserController : BaseQuizController
  {
    public Object Get()
    {
      return Json((QuizDB.QuizUsers.AsEnumerable()), new JsonSerializerSettings()
      {
        ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
        Formatting = Formatting.Indented
      });
    }

    public Object Get(String id)
    {
      return ToJson(
          QuizDB.QuizUsers
          .Where(user => user.id == id)
          .Select(user => new
          {
            user.email,
            user.id,
            user.name,
            user.isLastQuestionForCurrentQuiz,
            user.isLastQuiz,
            currentUserQuestionId = user.currentUserQuestionId,
            CurrentUserQuestion = new
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
            },
            currentUserQuizId = user.currentUserQuizId,
            CurrentUserQuiz = new
            {
              user.CurrentUserQuiz.id,
              user.CurrentUserQuiz.quizId,
              user.CurrentUserQuiz.timeTakenInterval,
              Quiz = new
              {
                user.CurrentUserQuiz.Quiz.description,
                user.CurrentUserQuiz.Quiz.id,
                user.CurrentUserQuiz.Quiz.level,
                user.CurrentUserQuiz.Quiz.timeoutInterval,
              },
            }
          })
          .FirstOrDefault());
    }

    public Object Post([FromBody]QuizUser quizUser)
    {
      //this.SetNextQuiz(quizUser);
      //this.SetNextQuestion(quizUser);

      QuizDB.QuizUsers.Add(quizUser);
      var savedValue = this.SaveQuizDBChanges(); // QuizDB.SaveChanges();

      Console.WriteLine("Saved Changed !!! " + savedValue);
      return new
      {
        id = quizUser.id,
        email = quizUser.email,
        name = quizUser.name
      };
    }
  }
}
