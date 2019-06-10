using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MarAirRoles.Models
{
    public class RequestSwap
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int UserId { get; set; }

        public int FlightId { get; set; }
        public bool Approved { get; set; }
        public int AccUser { get; set; }
        public DateTime CreationDate { get; set; }
    }
}