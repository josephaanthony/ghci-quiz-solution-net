using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GHCIQuizSolution.Controllers.AdminControllers
{
  public class AdminUserController : BaseQuizController
  {
    public Object Get() {
      return QuizDB.QuizUsers.Select(user => new {
        user.email,
        user.id,
        user.name,
        UserQuizs = user.UserQuizs.Select(quiz => new {
          quiz.id,
          quiz.quizId,
          quiz.attempt,
          Quiz = new {
            quiz.Quiz.description,
            quiz.Quiz.id,
            quiz.Quiz.level,
          },
          quiz.status,
        })
        .OrderBy(quiz => quiz.Quiz.level)
        .ThenBy(quiz => quiz.attempt)
      });
    }

    public Object Delete(String id) {
      //var userDb = QuizDB.QuizUsers.Where(user => user.id == id).FirstOrDefault();
      //if(userDb == null) {
      //  return NotFound();
      //}
      using (var dbTran = QuizDB.Database.BeginTransaction())
      {
        try
        {
          QuizDB.Database.ExecuteSqlCommand("UPDATE QuizUser set currentUserQuizId = null, currentUserQuestionId = null where id = @P0", new[] { id });
          QuizDB.Database.ExecuteSqlCommand("DELETE from UserQuestion where userQuizId in (SELECT id from UserQuiz where userId = @P0)", new[] { id });
          QuizDB.Database.ExecuteSqlCommand("DELETE from UserQuiz where userId = @P0", new[] { id });
          QuizDB.Database.ExecuteSqlCommand("DELETE from QuizUser where id = @P0", new[] { id });
          dbTran.Commit();
        }
        catch (Exception ex)
        {
          logger.Info("Exception Deleting User: " + ex.ToString());
          dbTran.Rollback();
          throw;
        }
      }

      return 1;
    }
  }
}
