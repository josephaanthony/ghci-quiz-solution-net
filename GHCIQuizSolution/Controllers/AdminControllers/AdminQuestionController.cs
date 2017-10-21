using GHCIQuizSolution.DBContext;
using System;
using System.Collections.Generic;
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
            QuizOptions = question.QuizOptions.Select(option => new {
              option.description,
              option.id,
              option.isCorrect,
              option.questionId
            })
          }),
          quiz.timeoutInterval
        }).FirstOrDefault();
    }

    public Object Put([FromBody] Question question) {
      var questionDb = QuizDB.Questions
        .Where(q => q.id == question.id)
        .FirstOrDefault();

      if(questionDb == null) {
        return NotFound();
      }

      questionDb.complexity = question.complexity;
      questionDb.description = question.description;
      questionDb.optionType = question.optionType;

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
        QuizOptions = question.QuizOptions.Select(option => new
        {
          option.description,
          option.id,
          option.isCorrect,
          option.questionId
        })
      };
    }

    public Object Post([FromBody] Question question) {
      question.id = null;
      question.QuizOptions.Reverse();
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
