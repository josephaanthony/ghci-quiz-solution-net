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

namespace GHCIQuizSolution.Controllers
{
  public class QuizUserController : BaseAPIController
  {
    public Object Get()
    {
      return Json((QuizDB.QuizUsers.AsEnumerable()), new JsonSerializerSettings()
      {
        ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
        Formatting = Formatting.Indented
      });
      //return ToJson(QuizDB.QuizUsers.AsEnumerable());
    }

    private Object GetWithFind(String id)
    {
      var user = QuizDB.QuizUsers.Find(id);

      return Json(
        new QuizUser
        {
          //CurrentUserQuestion = (UserQuestion)null,
          currentUserQuestionId = user.currentUserQuestionId,
          CurrentUserQuiz = new UserQuiz
          {
            id = user.CurrentUserQuiz.id,
            quizId = user.CurrentUserQuiz.quizId,
            timeTakenInterval = user.CurrentUserQuiz.timeTakenInterval,
            UserQuestions = user.CurrentUserQuiz.UserQuestions.Select(userQ =>
              new UserQuestion
              {
                id = userQ.id,
                index = userQ.index,
                isCorrect = userQ.isCorrect,
                Question = new Question
                {
                  description = userQ.Question.description,
                  id = userQ.Question.id,
                  optionType = userQ.Question.optionType,
                  QuizOptions = userQ.Question.QuizOptions.Select(quizOption => new QuizOption
                  {
                    description = quizOption.description,
                    id = quizOption.id,
                    isCorrect = quizOption.isCorrect,
                  }).ToList()
                },
                questionId = userQ.questionId,
                selectedOptionIds = userQ.selectedOptionIds
              }
              ).ToList()
          },
          currentUserQuizId = user.currentUserQuizId,
          email = user.email,
          id = user.id,
          name = user.name
        },
        new JsonSerializerSettings()
        {
          ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
          Formatting = Formatting.Indented,
        });
    }

    public Object Get(String id)
    {
      return ToJson(QuizDB.QuizUsers
        .Select(user => new
        {
          user.email,
          user.id,
          user.name,
          user.isLastQuestionForCurrentQuiz,
          user.isLastQuiz,
          currentUserQuestionId = user.currentUserQuestionId,
          CurrentUserQuestion = new {
            user.CurrentUserQuestion.id,
            user.CurrentUserQuestion.index,
            user.CurrentUserQuestion.isCorrect,
            Question = new
            {
              user.CurrentUserQuestion.Question.description,
              user.CurrentUserQuestion.Question.id,
              user.CurrentUserQuestion.Question.optionType,
              QuizOptions = user.CurrentUserQuestion.Question.QuizOptions.Select(quizOption => new
              {
                quizOption.description,
                quizOption.id,
                quizOption.isCorrect,
              })
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
            Quiz = new {
              user.CurrentUserQuiz.Quiz.description,
              user.CurrentUserQuiz.Quiz.Id,
              user.CurrentUserQuiz.Quiz.level,
              user.CurrentUserQuiz.Quiz.timeoutInterval,
            },
            //UserQuestions = user.CurrentUserQuiz.UserQuestions.Select(userQ =>
            //  new
            //  {
            //    id = userQ.id,
            //    index = userQ.index,
            //    isCorrect = userQ.isCorrect,
            //    Question = new
            //    {
            //      description = userQ.Question.description,
            //      id = userQ.Question.id,
            //      optionType = userQ.Question.optionType,
            //      QuizOptions = userQ.Question.QuizOptions.Select(quizOption => new
            //      {
            //        description = quizOption.description,
            //        id = quizOption.id,
            //        isCorrect = quizOption.isCorrect,
            //      }).ToList()
            //    },
            //    questionId = userQ.questionId,
            //    selectedOptionIds = userQ.selectedOptionIds
            //  }
            //).ToList()
          }
        })
        .Where(user => user.id == id)
        //.AsEnumerable()
        //.Select(user => new QuizUser()
        //{
        //  currentUserQuestionId = user.currentUserQuestionId,
        //  currentUserQuestionIndex = user.currentUserQuestionIndex,
        //  CurrentUserQuiz = user.CurrentUserQuiz,
        //  currentUserQuizId = user.currentUserQuizId,
        //  currentUserQuizIndex = user.currentUserQuizIndex,
        //  email = user.email,
        //  id = user.id,
        //  name = user.name
        //})
        .First());
    }

    public Object Post([FromBody]QuizUser quizUser)
    {
      var quizLevel1 = QuizDB.Quizs.OrderBy(quiz => quiz.level).FirstOrDefault();

      quizUser.CurrentUserQuiz = new UserQuiz()
      {
        Quiz = quizLevel1,
      };

      int indexCounter = 0;
      foreach (var item in quizLevel1.Questions)
      {
        quizUser.CurrentUserQuiz.UserQuestions.Add(new UserQuestion()
        {
          index = indexCounter++,
          Question = item,
        });
      }

      quizUser.CurrentUserQuestion = quizUser.CurrentUserQuiz.UserQuestions.OrderBy(q => q.index).FirstOrDefault();

      quizUser.isLastQuiz = QuizDB.Quizs.Count() == 1;
      quizUser.isLastQuestionForCurrentQuiz = quizUser.CurrentUserQuestion.index == quizUser.CurrentUserQuiz.UserQuestions.Count() - 1;

      QuizDB.QuizUsers.Add(quizUser);
      var savedValue = this.SaveQuizDBChanges(); // QuizDB.SaveChanges();

      Console.WriteLine("Saved Changed !!! " + savedValue);
      return new
      {
        id = quizUser.id,
        email = quizUser.email,
        name = quizUser.name
      };
    }

    public Object Put([FromBody]QuizUser quizUser) {
      var dbQuizUser = QuizDB.QuizUsers.First(u => u.id == quizUser.id);
      //var dbQuizUser.CurrentUserQuiz.UserQuestions.First(u => u.id == dbQuizUser.CurrentUserQuestion.id);

      var selectedOptions = quizUser.CurrentUserQuestion.selectedOptionIds?.Split(',').OrderBy(s => s);
      var correctOptions = dbQuizUser.CurrentUserQuestion.Question.QuizOptions.Where(o => o.isCorrect ?? true).Select(o => o.id).OrderBy(s => s);

      // first set the isCorrect
      dbQuizUser.CurrentUserQuestion.selectedOptionIds = quizUser.CurrentUserQuestion.selectedOptionIds;
      dbQuizUser.CurrentUserQuestion.isCorrect = selectedOptions.SequenceEqual(correctOptions);

      // change to the next question if available.
      if(dbQuizUser.isLastQuestionForCurrentQuiz ?? false == false) {
        var potentionalNextQuestions = dbQuizUser.CurrentUserQuiz.UserQuestions
                .Where(q => q.index > quizUser.CurrentUserQuestion.index)
                .OrderBy(q => q.index)
                .Take(2);

        if(potentionalNextQuestions.Count() == 1) {
          dbQuizUser.isLastQuestionForCurrentQuiz = true;
        }
        dbQuizUser.CurrentUserQuestion = potentionalNextQuestions.First();
      }
      else {
        dbQuizUser.CurrentUserQuestion = null;
      }

      this.SaveQuizDBChanges();
      return dbQuizUser.CurrentUserQuestion;
    }
  }
}
