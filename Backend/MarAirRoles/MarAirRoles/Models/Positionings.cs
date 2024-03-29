﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MarAirAdmin.Models
{
    public class Positionings
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public DateTime Start { get; set; }
        public string Type { get; set; }
        public string DepartureTime { get; set; }
        public string ArrivalTime { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public DateTime End { get; set; }
        public string Remarks { get; set; }


    }
}