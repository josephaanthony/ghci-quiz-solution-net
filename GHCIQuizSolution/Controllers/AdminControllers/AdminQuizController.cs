using GHCIQuizSolution.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GHCIQuizSolution.Controllers.AdminControllers
{
  public class AdminQuizController : BaseQuizController
  {
    public Object Get()
    {
      return QuizDB.Quizs.Select(quiz => new {
        quiz.complexityComposition,
        quiz.description,
        quiz.id,
        quiz.level,
        quiz.timeoutInterval
      }).OrderBy(quiz => quiz.level);
    }

    public Object Put([FromBody] Quiz quiz) {
      var quizDb = QuizDB.Quizs
        .Where(q => q.id == quiz.id)
        .FirstOrDefault();

      if(quizDb == null) {
        return NotFound();
      }

      quizDb.complexityComposition = quiz.complexityComposition;
      quizDb.description = quiz.description;
      quizDb.level = quiz.level;
      quizDb.timeoutInterval = quiz.timeoutInterval;

      this.SaveQuizDBChanges();

      return quiz;
    }

    public Object Post([FromBody] Quiz quiz)
    {
      quiz.id = null;
      QuizDB.Quizs.Add(quiz);
      this.SaveQuizDBChanges();

      return new {
        quiz.complexityComposition,
        quiz.description,
        quiz.id,
        quiz.level,
        quiz.timeoutInterval
      };
    }

    public Object Delete(String id) {
      var quizDb = QuizDB.Quizs
        .Where(q => q.id == id)
        .FirstOrDefault();

      if (quizDb == null)
      {
        return NotFound();
      }

      QuizDB.Quizs.Remove(quizDb);
      return this.SaveQuizDBChanges();
    }
  }
}
