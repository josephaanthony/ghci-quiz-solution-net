using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GHCIQuizSolution.Models.FromDBContext
{
  public interface IFileBased
  {
    String id { get; set; }
    FileType file { get; set; }
    String imageUrl { get; set; }
  }
}
