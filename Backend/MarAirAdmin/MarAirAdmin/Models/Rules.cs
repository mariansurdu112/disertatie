using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MarAirAdmin.Models
{
    public class Rules
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("NomRule")]
        public int RuleId { get; set; }
        public virtual NomRules NomRule { get; set; }


    }
}