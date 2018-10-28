using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MarAirAdmin.Models
{
    public class Flights
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
       public DateTime ReportingTime { get; set; }
        public DateTime TakeOffTime { get; set; }
        public DateTime ArrivalTime { get; set; }
        public string FlightNumber { get; set; }
        
        [ForeignKey("Aircraft")]
        public int AircraftId { get; set; }
        public virtual NomAircrafts Aircraft { get; set; }

        public DateTime EstimatedTakeOff { get; set; }
        public DateTime EstimatedArrival { get; set; }

        public int FlightTime { get; set; }




        

    }
}