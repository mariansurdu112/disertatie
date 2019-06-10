using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using MarAirAdmin.Models;

namespace MarAirRoles.Models
{
    public class ReportedDelays
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int Time { get; set; }

        [ForeignKey("Flight")] public int FlightId { get; set; }
        public virtual Flights Flight { get; set; }

        [ForeignKey("DelayCode")] public int DelayCodeId { get; set; }
        public virtual DelayCode DelayCode { get; set; }
    }
}