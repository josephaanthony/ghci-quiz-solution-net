using GHCIQuizSolution.DBContext;
using GHCIQuizSolution.Filters.Security;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GHCIQuizSolution.Controllers.AdminControllers
{
  //[IdentityBasicAuthentication]
  //[Authorize ( Roles = "basic")]
  public class AdminQuizController : BaseQuizController
  {
    public Object Get()
    {
      return QuizDB.Quizs.Select(quiz => new {
        quiz.complexityComposition,
        quiz.description,
        quiz.id,
        quiz.level,
        quiz.passpoint,
        quiz.imageUrl,
        quiz.successMessage,
        quiz.failedMessage,
        quiz.instruction
      }).OrderBy(quiz => quiz.level);
    }

    private void ValidateQuiz(Quiz quiz) {
      List<String> validationMessages = new List<string>();
      CheckLength(quiz.complexityComposition, 3, "Complexity value not valid", validationMessages);
      CheckLength(quiz.description, 3, "Description value not valid", validationMessages);

      try
      {
        var complexityComp = JsonConvert.DeserializeObject<ComplexityComposition[]>(quiz.complexityComposition);
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

      if (quiz.passpoint.GetValueOrDefault() <= 0)
      {
        validationMessages.Add("PassPoint value not valid");
      }

      if (validationMessages.Count() > 0)
      {
        throw new InvalidOperationException(String.Join("\n", validationMessages));
      }
    }

    private Object GetQuiz(Quiz quiz) {
      return new
      {
        quiz.complexityComposition,
        quiz.description,
        quiz.id,
        quiz.level,
        quiz.passpoint,
        quiz.imageUrl,
      };
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
      quizDb.passpoint = quiz.passpoint;
      quizDb.successMessage = quiz.successMessage;
      quizDb.failedMessage = quiz.failedMessage;
      quizDb.instruction = quiz.instruction;
      //quizDb.imageUrl = quiz.imageUrl;

      var fnList = this.SetImageUrl(quiz, quizDb);

      ValidateQuiz(quizDb);
      
      this.SaveQuizDBChanges();
      fnList.ForEach(f => f.Invoke());

      return GetQuiz(quizDb);
    }

    public Object Post([FromBody] Quiz quiz)
    {
      quiz.id = null;

      var fnList = this.SetImageUrl(quiz, quiz);
      ValidateQuiz(quiz);
      QuizDB.Quizs.Add(quiz);

      this.SaveQuizDBChanges();
      fnList.ForEach(f => f.Invoke());

      return GetQuiz(quiz);
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
