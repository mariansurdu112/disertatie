using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MarAirAdmin.Models
{
    public class NomAircrafts
    {
        [Key]
        public int Id { get; set; }
        public string AircraftName { get; set; }
        public string RegistrationNumber { get; set; }

    }
}