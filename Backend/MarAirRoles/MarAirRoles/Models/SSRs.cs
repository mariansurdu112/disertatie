using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MarAirAdmin.Models
{
    public class SSRs
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string SSRCode { get; set; }
        public int No { get; set; }

        [ForeignKey("Flight")]
        public int FlightId { get; set; }
        public virtual Flights Flight { get; set; }

    }
}