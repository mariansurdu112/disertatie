using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MarAirRoles.Models
{
    public class UserActions
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Action { get; set; }

        public bool Admin { get; set; }
        public bool Manager { get; set; }
        public bool Planificator { get; set; }
        public bool Logistic { get; set; }
        public bool Technic { get; set; }
    }
}