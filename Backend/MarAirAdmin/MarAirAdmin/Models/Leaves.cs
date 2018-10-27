using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MarAirAdmin.Models
{
    public class Leaves
    {
        [Key]
        public int Id { get; set; }
        public DateTime Start { get; set; }
        public string Type { get; set; }
        public DateTime End { get; set; }
        public string Remarks { get; set; }


    }
}