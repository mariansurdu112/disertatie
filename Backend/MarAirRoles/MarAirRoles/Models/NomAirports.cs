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
        public string Location { get; set; }
        public string IataCode { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
     }
}