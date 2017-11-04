using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace QuizRunner
{
  class Program
  {
    private static Logger logger = LogManager.GetCurrentClassLogger();

    static void Main(string[] args)
    {
      HttpClient httpClient = new HttpClient();
      var task = httpClient.GetAsync("http://codeghci.com/api/quizuser/935dc15a-e9f0-48dc-bdae-68489bc238db");

      task.Wait();

      Console.WriteLine("Ping called with status code: " + task.Result.StatusCode);      
    }
  }
}
