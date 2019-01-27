using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using Microsoft.SqlServer.Server;

namespace MarAirRoles.Models
{
    public class CompanyFlights
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string From { get; set; }
        public string To { get; set; }
        public string IataDep { get; set; }
        public string IataArr { get; set; }
        public string RadioCallSign { get; set; }
    }
}