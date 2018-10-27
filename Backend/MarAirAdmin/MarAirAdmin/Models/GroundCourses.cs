using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MarAirAdmin.Models
{
    public class GroundCourses
    {
        [Key]
        public int Id { get; set; }
        public string Type { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public bool Passed { get; set; }
        public string Location { get; set; }
        public string Remarks { get; set; }


    }
}