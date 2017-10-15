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
      //var quizUserController = new QuizUserController();
      //var quizUser = quizUserController.Post(new QuizUser()
      //{
      //  name = "Joe",
      //  email = "test@test.com"
      //});
      //Assert.IsNotNull(quizUser);
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
      var quizUserController = new QuizUserController();
      var quizUser = quizUserController.Put(new QuizUser()
      {
        id = "d4bd51c4-bcdf-4075-9798-6c472f9b00e2",
        CurrentUserQuestion = new UserQuestion()
        {
          id = "33056190-682c-4e7a-b375-ed91322c5d2f",
          selectedOptionIds = "5a122b17-a3a5-403a-8a9c-79b84095d525, 5a122b17-a3a5-403a-8a9c-79b84095d523"
        }
      });
      Assert.IsNotNull(quizUser);
    }

  }
}
