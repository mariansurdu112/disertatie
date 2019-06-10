using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MarAirAdmin.Models
{
    public class NomAircrafts
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string AircraftName { get; set; }
        public string RegistrationNumber { get; set; }
        public int MaxCapacity { get; set; }
        public double MaxFuel { get; set; }
        public int BagCapacity { get; set; }
        public bool Cargo { get; set; }
        public string AircraftPicture { get; set; }
       

    }
}