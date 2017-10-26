using GHCIQuizSolution.DBContext;
using Newtonsoft.Json;
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

    private void ValidateQuiz(Quiz quiz) {
      List<String> validationMessages = new List<string>();
      CheckLength(quiz.complexityComposition, 3, "Complexity value not valid", validationMessages);
      CheckLength(quiz.description, 3, "Description value not valid", validationMessages);

      try
      {
        var complexityComp = JsonConvert.DeserializeAnonymousType(quiz.complexityComposition, new[] { new { level = String.Empty, nos = 0 } });
        var compGroup = complexityComp.GroupBy(c => c.level);

        var notInArray = compGroup.Where(grp => !QUESTION_COMPLEXITITES.Contains(grp.Key));
        if(notInArray.Count() > 0) {
          validationMessages.Add("Complexity value not valid - " + String.Join(",", notInArray.Select(n => n.Key)));
        }

        var countMoreNotOne = compGroup.Where(grp => grp.Count() > 1);
        if(countMoreNotOne.Count() > 0) {
          validationMessages.Add("Complexity value cannot repeat - " + String.Join(",", countMoreNotOne.Select(n => n.Key)));
        }

        var nonPositive = compGroup.Where(grp => grp.First().nos < 1);
        if(nonPositive.Count() > 0) {
          validationMessages.Add("Complexity value cannot be less than 1 - " + String.Join(",", nonPositive.Select(n => n.Key)));
        }
      }
      catch (Exception)
      {
        validationMessages.Add("Complexity value not valid");
      }

      if(quiz.level.GetValueOrDefault() <= 0) {
        validationMessages.Add("Level value not valid");
      }

      if (validationMessages.Count() > 0)
      {
        throw new InvalidOperationException(String.Join("\n", validationMessages));
      }
    }

    public Object Put([FromBody] Quiz quiz) {
      var quizDb = QuizDB.Quizs
        .Where(q => q.id == quiz.id)
        .FirstOrDefault();

      if(quizDb == null) {
        return NotFound();
      }

      ValidateQuiz(quiz);

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

      ValidateQuiz(quiz);

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
