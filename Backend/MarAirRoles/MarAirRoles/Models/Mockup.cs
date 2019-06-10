using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using MarAirAdmin.Models;

namespace MarAirRoles.Models
{
    public class Mockup
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [ForeignKey("Instructor")]
        public int InstructorCrewId { get; set; }
        public virtual Crews Instructor { get; set; }

        [ForeignKey("Device")]
        public int? DeviceId { get; set; }
        public virtual NomDevice Device { get; set; }


        [ForeignKey("InstructorType")]
        public int InstructorTypeId { get; set; }
        public virtual NomInstructorType InstructorType { get; set; }

        [ForeignKey("Form")]
        public int FormId { get; set; }
        public virtual NomMockupForms Form { get; set; }

        public DateTime Date { get; set; }
    }
}