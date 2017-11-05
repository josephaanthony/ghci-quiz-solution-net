using GHCIQuizSolution.DBContext;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Validation;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Http;

namespace GHCIQuizSolution.Controllers
{
  public class BaseAPIController : ApiController
  {
    public static string FILE_TEMP_PATH = HttpContext.Current.Server.MapPath("~/App_Data/Temp");
    public static string FILE_IMAGE_PATH = HttpContext.Current.Server.MapPath("~/Images");
    protected readonly GHCIQuizEntities QuizDB = new GHCIQuizEntities();

    public BaseAPIController()
    {
      if("true".Equals(ConfigurationManager.AppSettings["WriteQueryTrace"])) {
        QuizDB.Database.Log = s => System.Diagnostics.Debug.WriteLine(s);
      }
    }

    protected HttpResponseMessage ToJson(dynamic obj)
    {
      var response = Request.CreateResponse(HttpStatusCode.OK);
      response.Content = new StringContent(JsonConvert.SerializeObject(obj, Formatting.Indented, new JsonSerializerSettings
      {
        ReferenceLoopHandling = ReferenceLoopHandling.Ignore
      }), Encoding.UTF8, "application/json");
      return response;
    }

    protected int SaveQuizDBChanges()
    {
      foreach (dynamic entry in QuizDB.ChangeTracker.Entries()
            .Where(e => e.State == EntityState.Added))
      {
        try
        {
          if (String.IsNullOrWhiteSpace(entry.Entity.id))
          {
            entry.Entity.id = Guid.NewGuid().ToString();
          }
        }
        catch (Exception)
        {
          // ignore this error.
        }
      }

      try
      {
        return QuizDB.SaveChanges();
      }
      catch (DbEntityValidationException dbException)
      {
        throw new Exception(String.Join("\n", dbException.EntityValidationErrors.Select(err => String.Join("\n", err.ValidationErrors.Select(v => v.ErrorMessage)))), dbException);
      }
      catch(DataException dbDataException) {
        var ex = GetInnerExceptionMessage(dbDataException);
        throw new Exception(ex, dbDataException);
      }
    }

    private String GetInnerExceptionMessage(Exception ex, String message = "") {
      if(ex.Message.Contains("See the inner exception for details") && ex.InnerException != null) {
        message = GetInnerExceptionMessage(ex.InnerException, message);
      }
      else {
        message = message + ex.ToString();
        if (ex.InnerException != null) {
          message = GetInnerExceptionMessage(ex.InnerException, message);
        }
      }

      return message;
    }
  }
}
