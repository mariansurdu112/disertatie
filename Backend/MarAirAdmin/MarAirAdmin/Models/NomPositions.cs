using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MarAirAdmin.Models
{
    public class NomPositions
    {
        [Key]
        public int Id { get; set; }
        public string Label { get; set; }
        public string Code { get; set; }
    }
}