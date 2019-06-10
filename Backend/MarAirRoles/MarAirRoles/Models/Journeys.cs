using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using MarAirAdmin.Models;

namespace MarAirRoles.Models
{
    public class Journeys
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [ForeignKey("FK_FLIGHT")]
        public int FlightId { get; set; }
        public virtual Flights FK_FLIGHT { get; set; }
        public DateTime Tobt { get; set; }
        public DateTime Tsat { get; set; }
        public DateTime Ctot { get; set; }
        public DateTime DoorClosed { get; set; }
        public DateTime ReportedBlockOn { get; set; }
        public DateTime ReportedBlockOff { get; set; }
        public bool Delayed { get; set; }
        public int DelayDeparture { get; set; }
        public int DelayArrival { get; set; }

    }
}