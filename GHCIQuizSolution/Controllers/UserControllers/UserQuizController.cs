using GHCIQuizSolution.DBContext;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GHCIQuizSolution.Controllers.UserControllers
{
  public class UserQuizController : BaseQuizController
  {
    private static Logger logger = LogManager.GetCurrentClassLogger();

    public Object Get(String id)
    {
      logger.Info("The Id is:" + id);

      var quizs = QuizDB.Quizs
        .Select(quiz => new
        {
          quiz.description,
          quiz.id,
          quiz.level,
          quiz.passpoint,
          quiz.imageUrl,
          UserQuizs =
            quiz.UserQuizs
            .Where(userQuiz => userQuiz.userId == id)
            //.OrderBy(u => u.attempt)
            .Select(userQuiz => new
            {
              userQuiz.id,
              userQuiz.quizId,
              userQuiz.status,
              userQuiz.timeTakenInterval,
              userQuiz.attempt
              //,
              //QuizUser = new
              //{
              //  userQuiz.QuizUser.currentUserQuizId,
              //  userQuiz.QuizUser.email,
              //  userQuiz.QuizUser.id,
              //  userQuiz.QuizUser.name
              //}
            })
          //.OrderBy(u => u.attempt)
          .DefaultIfEmpty()
        })
        .OrderBy(quiz => quiz.level);

      return quizs;
    }

    public Object Post([FromBody]QuizUser quizUser)
    {
      var dbQuizUser = QuizDB.QuizUsers.First(u => u.id == quizUser.id);

      
      // if there is no quiz assigned or the current quiz is completed then get the next quiz.
      if (dbQuizUser.CurrentUserQuiz == null || dbQuizUser.CurrentUserQuiz.status == QUIZ_STATUS.COMPLETED_FAIL || dbQuizUser.CurrentUserQuiz.status == QUIZ_STATUS.COMPLETED_SUCCESS) {
        this.SetNextQuiz(dbQuizUser);
        this.SetNextQuestion(dbQuizUser);
      }

      // ensure that the request quizId is indeed the users next or inprogress quiz.
      if (dbQuizUser.CurrentUserQuiz != null && dbQuizUser.CurrentUserQuiz.status == QUIZ_STATUS.IN_PROGRESS
        && dbQuizUser.CurrentUserQuiz.Quiz !=null && dbQuizUser.CurrentUserQuiz.Quiz.id == quizUser.CurrentUserQuiz.quizId)
      {
        this.SaveQuizDBChanges();
        // return current user
        return Ok(quizUser);
      }
      else {
        return NotFound();
      }
    }
  }
}
