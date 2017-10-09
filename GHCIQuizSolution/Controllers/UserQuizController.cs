using GHCIQuizSolution.DBContext.DBModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GHCIQuizSolution.Controllers
{
    public class UserQuizController : BaseAPIController
    {
      public IEnumerable<UserQuiz> Get()
      {
        return QuizDB.UserQuizs.AsEnumerable();
      }
  }
}
