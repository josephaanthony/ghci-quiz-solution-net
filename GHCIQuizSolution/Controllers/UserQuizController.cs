using GHCIQuizSolution.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GHCIQuizSolution.Controllers
{
  public class UserQuizController : BaseQuizController
  {
    public Object Get(String id)
    {
      var quizs = QuizDB.Quizs
        .Select(quiz => new
        {
          quiz.description,
          quiz.id,
          quiz.level,
          quiz.timeoutInterval,
          UserQuizs =
            quiz.UserQuizs
            .Where(userQuiz => userQuiz.userId == id)
          //.Where(userQuiz => userQuiz.QuizUsers.Select(user => user.id == id))
          .Select(userQuiz => new
          {
            userQuiz.id,
            userQuiz.quizId,
            userQuiz.status,
            userQuiz.timeTakenInterval,
            QuizUser = new
            {
              userQuiz.QuizUser.currentUserQuizId,
              userQuiz.QuizUser.email,
              userQuiz.QuizUser.id,
              userQuiz.QuizUser.name
            }

          })
        });

      Console.WriteLine(quizs.First().UserQuizs.First());

      return quizs;

      //return QuizDB.QuizUsers
      //  .Where(u => u.id == userId)
      //  .Select(user => new
      //  {
      //    user.email,
      //    user.id,
      //    user.name,
      //    user.currentUserQuizId,
      //    UserQuizs = user.UserQuizs
      //      .OrderBy(quiz => quiz.Quiz.level)
      //      .Select(quiz => new {
      //      quiz.id,
      //      quiz.quizId,
      //      Quiz = new
      //      {
      //        quiz.Quiz.description,
      //        quiz.Quiz.Id,
      //        quiz.Quiz.level,
      //        quiz.Quiz.timeoutInterval
      //      },
      //      quiz.status,
      //      quiz.timeTakenInterval
      //    })
      //  });

      //return QuizDB.UserQuizs
      //  .Where(q => q.QuizUsers.Any(u => u.id == userId))
      //  .Select(quiz => new {
      //    quiz.id,
      //    quiz.quizId,
      //    Quiz = new {
      //      quiz.Quiz.description,
      //      quiz.Quiz.Id,
      //      quiz.Quiz.level,
      //      quiz.Quiz.timeoutInterval
      //    },
      //    quiz.status,
      //    quiz.timeTakenInterval
      //  });
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
