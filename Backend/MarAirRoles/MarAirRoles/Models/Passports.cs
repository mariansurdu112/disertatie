using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using MarAirAdmin.Models;

namespace MarAirRoles.Models
{
    public class Passports
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [ForeignKey("Crew")]
        public int CrewId { get; set; }
        public virtual Crews Crew { get; set; }

        public int PassNo { get; set; }
        public string PassLciId { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public DateTime ExpDate { get; set; }
    }
}