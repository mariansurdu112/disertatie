using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MarAirRoles.Models
{
    public class Aircrafts
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string IataGroup { get; set; }
        public int Seats { get; set; }
        public int PoolId { get; set; }
        public string Owner { get; set; }
        public string RegNo { get; set; }

    }
}