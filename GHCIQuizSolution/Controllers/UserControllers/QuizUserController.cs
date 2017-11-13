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
using NLog;

namespace GHCIQuizSolution.Controllers.UserControllers
{
  public class QuizUserController : BaseQuizController
  {
    private static Logger logger = LogManager.GetCurrentClassLogger();

    public Object Get()
    {
      return Json((QuizDB.QuizUsers.AsEnumerable()), new JsonSerializerSettings()
      {
        ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
        Formatting = Formatting.Indented
      });
    }


    public Object Get(String id, String name = null)
    {
      logger.Info("The Id is:" + id + " The name is: " + name);

      //String regId = null;

      if(name != null && name.StartsWith("reg:")) {
        id = name.Remove(0, 4);
        name = null;
      }

      //return ToJson(
      return QuizDB.QuizUsers
      .Where(user => (user.id == id && id != null) || (name != null && user.name.Trim().ToLower() == name.Trim().ToLower()))
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
        },
        currentUserQuizId = user.currentUserQuizId,
        CurrentUserQuiz = new
        {
          user.CurrentUserQuiz.id,
          user.CurrentUserQuiz.quizId,
          user.CurrentUserQuiz.timeTakenInterval,
          user.CurrentUserQuiz.status,
          Quiz = new
          {
            user.CurrentUserQuiz.Quiz.description,
            user.CurrentUserQuiz.Quiz.id,
            user.CurrentUserQuiz.Quiz.level,
            user.CurrentUserQuiz.Quiz.passpoint,
            user.CurrentUserQuiz.Quiz.successMessage,
            user.CurrentUserQuiz.Quiz.failedMessage,
            user.CurrentUserQuiz.Quiz.instruction
          },
        }
      })
      .FirstOrDefault();
          //);
    }

    [Route("getbyemail/{emailId}")]
    public Object GetByEmail(String emailId) {
      return this.Get(null, emailId);
    }

    public Object Post([FromBody]QuizUser quizUser)
    {
      if(String.IsNullOrWhiteSpace(quizUser.name)) {
        throw new ArgumentException("Name not valid");
      }

      quizUser.name = quizUser.name.Trim();
      
      logger.Info("Logging user " + quizUser.name);

      dynamic getUser = this.GetByEmail(quizUser.name);

      logger.Info("User by email: " + getUser);

      if(getUser != null && quizUser.name.StartsWith("reg:")) {
        logger.Info("User Found with Id: " + getUser.email + " id: " + getUser.id);
        return new
        {
          id = getUser.id,
          email = getUser.email,
          name = getUser.name,
          registeredNew = true
        };
      }
      else if(getUser != null) {
        logger.Info("User Found: " + getUser.email + " id: " + getUser.id);
        return getUser;
      }

      QuizDB.QuizUsers.Add(quizUser);
      var savedValue = this.SaveQuizDBChanges(); // QuizDB.SaveChanges();

      Console.WriteLine("Saved Changed !!! " + savedValue);
      return new
      {
        id = quizUser.id,
        email = quizUser.email,
        name = quizUser.name,
        registeredNew = true
      };
    }
  }
}
