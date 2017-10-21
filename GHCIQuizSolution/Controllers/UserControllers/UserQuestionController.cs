using GHCIQuizSolution.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GHCIQuizSolution.Controllers.UserControllers
{
  public class UserQuestionController : BaseQuizController
  {
    public Object Post([FromBody]QuizUser quizUser)
    {
      var dbQuizUser = QuizDB.QuizUsers.First(u => u.id == quizUser.id);

      var selectedOptions = quizUser.CurrentUserQuestion.selectedOptionIds?.Split(',').OrderBy(s => s);
      var correctOptions = dbQuizUser.CurrentUserQuestion.Question.QuizOptions.Where(o => o.isCorrect).Select(o => o.id).OrderBy(s => s);

      // first set the isCorrect
      dbQuizUser.CurrentUserQuestion.selectedOptionIds = quizUser.CurrentUserQuestion.selectedOptionIds;
      dbQuizUser.CurrentUserQuestion.isCorrect = selectedOptions.SequenceEqual(correctOptions);

      this.SetNextQuestion(dbQuizUser);

      if(dbQuizUser.isLastQuestionForCurrentQuiz ?? false) {
        //dbQuizUser.CurrentUserQuiz.`
      }

      this.SaveQuizDBChanges();
      return new
      {
        dbQuizUser.id,
        dbQuizUser.isLastQuestionForCurrentQuiz,
        CurrentUserQuestion = this.GetCurrentUserQuestionForReturn(dbQuizUser)
      };
    }
  }
}
