using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using MarAirAdmin.Models;

namespace MarAirRoles.Models
{
    public class Courses
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [ForeignKey("Crew")]
        public int CrewId { get; set; }
        public virtual Crews Crew { get; set; }


        [ForeignKey("Course")]
        public int NomCourseId { get; set; }
        public virtual Courses Course { get; set; }

        public DateTime Date { get; set; }

    }
}