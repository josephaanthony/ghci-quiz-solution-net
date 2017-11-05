using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GHCIQuizSolution.Models
{
  public class FileType
  {
    public String ext {get;set;}
    public String fileName { get; set; }
    public bool isDeleted { get; set; }
  }
}
