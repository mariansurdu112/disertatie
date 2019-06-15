using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MarAirAdmin.Models
{
    public class NomAirports
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public string IataCode { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string AirportPhoto { get; set; }
        public bool OperationalBase { get; set; }
        public string FuelDensity { get; set; }
        public string Category { get; set; }
        public int TaxiIn { get; set; }
        public int TaxiOut { get; set; }
        public string Sector { get; set; }
        public string Country { get; set; }
     }
}