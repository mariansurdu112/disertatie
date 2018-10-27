using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MarAirAdmin.Models
{
    public class Crews
    {
        [Key]
        public int Id { get; set; }

        public string Firstname { get; set; }
        public string Lastname { get; set; }

    }
}