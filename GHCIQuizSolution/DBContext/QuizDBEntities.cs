namespace GHCIQuizSolution.DBContext
{
  using GHCIQuizSolution.DBContext.DBModel;
  using System;
  using System.Data.Entity;
  using System.Linq;

  public class QuizDBEntities : DbContext
  {
    // Your context has been configured to use a 'QuizDBEntities' connection string from your application's 
    // configuration file (App.config or Web.config). By default, this connection string targets the 
    // 'GHCIQuizSolution.DBContext.QuizDBEntities' database on your LocalDb instance. 
    // 
    // If you wish to target a different database and/or database provider, modify the 'QuizDBEntities' 
    // connection string in the application configuration file.
    public QuizDBEntities()
        : base("name=QuizDBEntities")
    {
    }

    // Add a DbSet for each entity type that you want to include in your model. For more information 
    // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

    public virtual DbSet<Quiz> Quizs { get; set; }
    public virtual DbSet<UserQuiz> UserQuizs { get; set; }
  }
}
