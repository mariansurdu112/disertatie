using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MarAirAdmin.Models
{
    public class NomActivities
    {
        [Key]
        public int Id { get; set; }
        public string ActivityName { get; set; }
        public string Code { get; set; }
    }
}