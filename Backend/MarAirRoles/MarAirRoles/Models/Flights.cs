using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using MarAirRoles.Models;

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

        [ForeignKey("DelayCode")]
        public int DelayCodeId { get; set; }
        public virtual DelayCode DelayCode { get; set; }

        public DateTime EstimatedTakeOff { get; set; }
        public DateTime EstimatedArrival { get; set; }
        public int Cycles { get; set; }
        public bool Day { get; set; }
        public int EstimatedPax { get; set; }
        public int Male { get; set; }
        public int Female { get; set; }
        public int Bags { get; set; }
        public int Infants { get; set; }
        public int WheelChairs { get; set; }
        public int FlightTime { get; set; }




        

    }
}