using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using MarAirAdmin.Models;

namespace MarAirRoles.Models
{
    public class CrewPosition
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [ForeignKey("FkPos")]
        public int PositionId { get; set; }
        public virtual NomPositions FkPos { get; set; }

        [ForeignKey("FkCrew")]
        public int CrewId { get; set; }
        public virtual Crews FkCrew { get; set; }
    }
}