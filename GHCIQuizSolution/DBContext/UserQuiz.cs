//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace GHCIQuizSolution.DBContext
{
    using System;
    using System.Collections.Generic;
    
    public partial class UserQuiz
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public UserQuiz()
        {
            this.QuizUsers = new HashSet<QuizUser>();
            this.UserQuestions = new HashSet<UserQuestion>();
        }
    
        public string id { get; set; }
        public string quizId { get; set; }
        public Nullable<int> timeTakenInterval { get; set; }
        public string status { get; set; }
        public string userId { get; set; }
    
        public virtual Quiz Quiz { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<QuizUser> QuizUsers { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<UserQuestion> UserQuestions { get; set; }
        public virtual QuizUser QuizUser { get; set; }
    }
}
