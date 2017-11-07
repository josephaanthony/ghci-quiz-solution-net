using GHCIQuizSolution.DBContext;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GHCIQuizSolution.Controllers.AdminControllers
{
  public class AdminQuestionController : BaseQuizController
  {
    public Object Get(String id)
    {
      return QuizDB.Quizs
        .Where(q => q.id == id)
        .Select(quiz => new {
          quiz.complexityComposition,
          quiz.description,
          quiz.id,
          quiz.level,
          Questions = quiz.Questions.Select(question => new {
            question.complexity,
            question.description,
            question.id,
            question.optionType,
            question.quizId,
            question.index,
            question.imageUrl,
            question.groupName,
            QuizOptions = question.QuizOptions.Select(option => new {
              option.description,
              option.id,
              option.isCorrect,
              option.questionId,
              option.index
            })
            .OrderBy(option => option.index)
          })
          .OrderBy(question => question.index),
          quiz.passpoint
        }).FirstOrDefault();
    }

    public Object Put([FromBody] Question question) {
      logger.Debug("Check this out " + question);

      var questionDb = QuizDB.Questions
        .Where(q => q.id == question.id)
        .FirstOrDefault();

      if(questionDb == null) {
        return NotFound();
      }

      questionDb.complexity = question.complexity;
      questionDb.description = question.description;
      questionDb.optionType = question.optionType;
      questionDb.index = question.index;
      questionDb.groupName = question.groupName;
      //questionDb.imageUrl = question.imageUrl;
      this.SetImageUrl(question, questionDb);
      ValidateQuestion(questionDb);

      var newlyAddedOptions = question.QuizOptions.Where(o => !questionDb.QuizOptions.Select(dbOp => dbOp.id).Contains(o.id)).ToList();
      var deletedOptions = questionDb.QuizOptions.Where(o => !question.QuizOptions.Select(op => op.id).Contains(o.id)).ToList();
      var toUpdateOptions = questionDb.QuizOptions.Where(o => question.QuizOptions.Select(op => op.id).Contains(o.id)).ToList();

      foreach (var item in deletedOptions)
      {
        questionDb.QuizOptions.Remove(item);
      }

      foreach (var item in newlyAddedOptions)
      {
        item.id = null;
        questionDb.QuizOptions.Add(item);
      }

      foreach (var item in toUpdateOptions)
      {
        var optionRequest = question.QuizOptions.First(o => o.id == item.id);
        item.description = optionRequest.description;
        item.isCorrect = optionRequest.isCorrect;
      }

      this.SaveQuizDBChanges();

      return GetQuestion(questionDb);
    }

    private Object GetQuestion(Question question) {
      return new
      {
        question.complexity,
        question.description,
        question.id,
        question.optionType,
        question.quizId,
        question.imageUrl,
        QuizOptions = question.QuizOptions.Select(option => new
        {
          option.description,
          option.id,
          option.isCorrect,
          option.questionId,
          option.index
        })
        .OrderBy(option => option.index)
      };
    }

    private void ValidateQuestion(Question question) {
      List<String> validationMessages = new List<string>();

      CheckInArray(question.complexity, QUESTION_COMPLEXITITES, "Complexity value not valid", validationMessages);

      if("GROUP".Equals(question.complexity)) {
        CheckLength(question.groupName, 2, "GroupName required for Group type questions", validationMessages);
      }

      if(String.IsNullOrWhiteSpace(question.description) && String.IsNullOrWhiteSpace(question.imageUrl)) {
        validationMessages.Add("Either Description or ImageUrl should be present");
      }

      //CheckLength(question.description, 3, "Description value not valid", validationMessages);

      CheckInArray(question.optionType, QUESTION_OPTION_TYPE, "Option Type value not valid", validationMessages);
      CheckLength(question.quizId, 3, "QuizId value not valid", validationMessages);

      if(question.QuizOptions.Count(op => op.isCorrect) == 0) {
        validationMessages.Add("Atleast one quiz option should be correct");
      }

      if("Radio".Equals(question.optionType)) {
        if(question.QuizOptions.Count(op => op.isCorrect) != 1) {
          validationMessages.Add("Only one quiz option can be correct for radio type");
        }
      }

      if (validationMessages.Count() > 0)
      {
        throw new InvalidOperationException(String.Join("\n", validationMessages));
      }
    }

    public Object Post([FromBody] Question question) {
      question.id = null;
      this.SetImageUrl(question, question);
      ValidateQuestion(question);

      QuizDB.Questions.Add(question);
      this.SaveQuizDBChanges();
      return GetQuestion(question);
    }

    public Object Delete(String id)
    {
      var questionDb = QuizDB.Questions
        .Where(q => q.id == id)
        .FirstOrDefault();

      if (questionDb == null)
      {
        return NotFound();
      }

      QuizDB.QuizOptions.RemoveRange(questionDb.QuizOptions);
      QuizDB.Questions.Remove(questionDb);
      return this.SaveQuizDBChanges();
    }
  }
}
