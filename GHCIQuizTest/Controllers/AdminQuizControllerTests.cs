using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using GHCIQuizSolution.Controllers.AdminControllers;
using GHCIQuizSolution.DBContext;

namespace GHCIQuizTest.Controllers
{
  [TestClass]
  public class AdminQuizControllerTests
  {
    [TestMethod]
    public void TestValidateQuiz()
    {

      //try
      //{
      //  new AdminQuizController().Post(new Quiz()
      //  {
      //    description = "Test",
      //    level = 1,
      //    complexityComposition = @"[{'level':'MEDIUM','nos':'2'},{'level':'EASY','nos':'5'},{'level':'COMPLEX','nos':'7'}]"
      //  });
      //}
      //catch (Exception ex)
      //{
      //  Assert.Fail(ex.ToString());        
      //}

      var exception = Assert.ThrowsException<InvalidOperationException>(() => new AdminQuizController().Post(new Quiz()
      {
        description = "Test",
        level = 0,
        complexityComposition = @"[{""level"":""MEDIUM"",""nos"":""2""},{""level"":""EASY"",""nos"":""5""},{""level"":""COMPLEX"",""nos"":""7""}]"
      }));

      Assert.AreEqual(exception.Message, "Level value not valid");


      exception = Assert.ThrowsException<InvalidOperationException>(() => new AdminQuizController().Post(new Quiz()
      {
        description = "Test",
        level = 0,
        complexityComposition = @"[{""level"":""MEDIUM1"",""nos"":""2""},{""level"":""EASY"",""nos"":""5""},{""level"":""COMPLEX"",""nos"":""7""}]"
      }));

      Assert.AreEqual(exception.Message, "Complexity value not valid - MEDIUM1\nLevel value not valid");


      exception = Assert.ThrowsException<InvalidOperationException>(() => new AdminQuizController().Post(new Quiz()
      {
        description = "Test",
        level = 0,
        complexityComposition = @"[{""level"":""MEDIUM"",""nos"":""0""},{""level"":""EASY"",""nos"":""5""},{""level"":""EASY"",""nos"":""7""}]"
      }));

      Assert.AreEqual(exception.Message, "Complexity value cannot repeat - EASY\nComplexity value cannot be less than 1 - MEDIUM\nLevel value not valid");
    }
  }
}
