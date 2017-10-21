using Microsoft.VisualStudio.TestTools.UnitTesting;
using GHCIQuizSolution.DBContext;
using GHCIQuizSolution.Controllers.UserControllers;
using GHCIQuizSolution.Controllers.AdminControllers;
using Newtonsoft.Json;

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
    public void GetQuizTest() {
      var userQuizController = new UserQuizController();
      var quizs = userQuizController.Get("2ae21727-09c0-488e-9505-f4dbfd8ba1c1");
      Assert.IsNotNull(quizs);
    }


    [TestMethod()]
    public void StartQuizTest() {
      var userQuizController = new UserQuizController();
      var quizs = userQuizController.Post(new QuizUser()
      {
        id = "2ae21727-09c0-488e-9505-f4dbfd8ba1c1",
        CurrentUserQuiz = new UserQuiz() {
          quizId = "5a122b17-a3a5-403a-8a9c-79b84095d515"
        }
      });
    }

    [TestMethod()]
    public void QuestionPutTest() {
      new AdminQuestionController().Put( JsonConvert.DeserializeObject<Question>(@"{
          'complexity': 'COMPLEX',
          'description': 'Question No 1 for Quiz 1 Update',
          'id': '5a122b17-a3a5-403a-8a9c-79b84095d518',
          'optionType': 'Checkbox',
          'quizId': '5a122b17-a3a5-403a-8a9c-79b84095d515',
          'QuizOptions': [
            {
                'description': 'Option 1 for Question 1 Quiz 1',
              'id': '5a122b17-a3a5-403a-8a9c-79b84095a523',
              'isCorrect': true,
              'questionId': '5a122b17-a3a5-403a-8a9c-79b84095d518'
            },
            {
                'description': 'Option 2 for Question 1 Quiz 1',
              'id': '5a122b17-a3a5-403a-8a9c-79b84095a524',
              'isCorrect': false,
              'questionId': '5a122b17-a3a5-403a-8a9c-79b84095d518'
            },
            {
                'description': 'Option 4 for Question 1 Quiz 1',
              'id': '5a122b17-a3a5-403a-8a9c-79b84095a526',
              'isCorrect': false,
              'questionId': '5a122b17-a3a5-403a-8a9c-79b84095d518'
            },
            {
                'isCorrect': 'true',
              'description': 'Option 5 for Question 1  Quiz 1'
            }
          ]
        }") );
    }
  }
}
