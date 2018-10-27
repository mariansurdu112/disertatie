using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MarAirAdmin.Models
{
    public class NomRules
    {
        [Key]
        public int Id { get; set; }
        public string Code { get; set; }

    }
}