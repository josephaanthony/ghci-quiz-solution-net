using Microsoft.VisualStudio.TestTools.UnitTesting;
using GHCIQuizSolution.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GHCIQuizSolution.DBContext;

namespace GHCIQuizSolution.Controllers.Tests
{
  [TestClass()]
  public class QuizUserControllerTests
  {
    [TestMethod()]
    public void PostTest()
    {
      var quizUserController = new QuizUserController();
      var quizUser = quizUserController.Post(new QuizUser()
      {
        name = "Joe",
        email = "test@test.com"
      });
      Assert.IsNotNull(quizUser);
    }

    [TestMethod()]
    public void GetTest()
    {
      var quizUserController = new QuizUserController();
      var quizUser = quizUserController.Get("3f55e5df-60b7-4db5-a205-83dc4c7efaca");
      Assert.IsNotNull(quizUser);
    }

    [TestMethod()]
    public void PutTest() {
      var quizUserController = new UserQuestionController();
      var quizUser = quizUserController.Post(new QuizUser()
      {
        id = "e4e8c1f4-c03d-4b9f-99d2-f190b0dc26af",
        CurrentUserQuestion = new UserQuestion()
        {
          id = "b013f839-58b0-465b-ad2d-45b14de2e375",
          selectedOptionIds = "5a122b17-a3a5-403a-8a9c-79b84095c525"
        }
      });
      Assert.IsNotNull(quizUser);
    }


    [TestMethod()]
    public void StartQuizTest() {
      var userQuizController = new UserQuizController();
      var quizs = userQuizController.Post(new QuizUser()
      {
        id = "7ccf32b0-7e34-4c94-a054-b6809cc0c92c",
        CurrentUserQuiz = new UserQuiz() {
          
        }
      });
    }

  }
}
