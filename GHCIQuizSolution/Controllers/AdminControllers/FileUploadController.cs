using NLog;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace GHCIQuizSolution.Controllers.AdminControllers
{
  public class FileUploadController : BaseAPIController
  {
    protected static Logger logger = LogManager.GetCurrentClassLogger();

    [HttpPost]
    public async Task<HttpResponseMessage> PostFormData()
    {
      logger.Info("Got Post Data " + Request.Content.IsMimeMultipartContent());

      // Check if the request contains multipart/form-data.
      if (!Request.Content.IsMimeMultipartContent())
      {
        throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
      }

      var provider = new MultipartFormDataStreamProvider(FILE_TEMP_PATH);

      try
      {
        // Read the form data.
        await Request.Content.ReadAsMultipartAsync(provider);

        // This illustrates how to get the file names.
        //foreach (MultipartFileData file in provider.FileData)
        //{
        //  logger.Debug(file.Headers.ContentDisposition.FileName);
        //  logger.Debug("Server file path: " + file.LocalFileName);
        //}

        var file = provider.FileData.First();

        return Request.CreateResponse(HttpStatusCode.OK,
          new {
            ext = Path.GetExtension(file.Headers.ContentDisposition.FileName.Replace("\"", "")),
            fileName = Path.GetFileName(file.LocalFileName)
          });
      }
      catch (System.Exception e)
      {
        return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
      }
    }
  }
}
