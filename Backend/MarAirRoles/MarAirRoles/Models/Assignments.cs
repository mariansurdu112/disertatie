using MarAirRoles.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MarAirAdmin.Models
{
    public class Assignments
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        [ForeignKey("Activity")]
        public int AsgType { get; set; }
        public virtual NomActivities Activity { get; set; }

        [ForeignKey("Flight")]
        public int FlightId { get; set; }
        public virtual Flights Flight { get; set; }

        [ForeignKey("Other")]
        public int OtherId { get; set; }
        public virtual Others Other { get; set; }

        [ForeignKey("Leave")]
        public int LeaveId { get; set; }
        public virtual Leaves Leave { get; set; }

        [ForeignKey("GroundCourse")]
        public int GroundCourseId { get; set; }
        public virtual GroundCourses GroundCourse { get; set; }

        [ForeignKey("Rest")]
        public int RestId { get; set; }
        public virtual Rest Rest { get; set; }

        [ForeignKey("Positioning")]
        public int PositioningId { get; set; }
        public virtual Positionings Positioning { get; set; }

        [ForeignKey("User")]
        public int ModifiedBy { get; set; }
        public virtual ApplicationUser User { get; set; }

        public DateTime LastUpdate { get; set; }
       

        [ForeignKey("Crew")]
        public int CrewId { get; set; }
        public virtual Crews Crew { get; set; }









    }
}