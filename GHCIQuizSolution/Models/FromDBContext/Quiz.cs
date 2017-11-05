using GHCIQuizSolution.Models;
using GHCIQuizSolution.Models.FromDBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GHCIQuizSolution.DBContext
{
  public partial class Quiz : IFileBased
  {
    public FileType file { get; set; }
  }
}
