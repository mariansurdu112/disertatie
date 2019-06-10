using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Web;
using MarAirAdmin.Models;

namespace MarAirRoles.Models
{
    public class CourseSections
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [ForeignKey("Course")] public int CourseId { get; set; }
        public virtual Courses Course { get; set; }
        
        public bool Mockup { get; set; }
        public bool Simulator { get; set; }
        public bool Flight { get; set; }
        public bool LineCheck { get; set; }



    }
}