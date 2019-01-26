using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MarAirAdmin.Models
{
    public class Contracts
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [ForeignKey("Crew")]
        public int CrewId { get; set; }
        public virtual Crews Crew { get; set; }
        public DateTime ExpiryDate { get; set; }
        public int Implied { get; set; }
      }

}