using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using MarAirAdmin.Models;

namespace MarAirRoles.Models
{
    public class Shipments
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string OrderNumber { get; set; }
        public string RequirementNumber { get; set; }
        public string RequirementPriority { get; set; }

        [ForeignKey("Fk_Part_No")]
        public int PartNo { get; set; }
        public virtual PartNumbers Fk_Part_No { get; set; }

        public int Ordered { get; set; }
        public int Delivered { get; set; }
        public string Awb { get; set; }
        public int UserId { get; set; }

        [ForeignKey("FK_NOM_AIRCRAFT")]
        public int Aircraft { get; set; }
        public virtual NomAircrafts FK_NOM_AIRCRAFT { get; set; }

        public string From { get; set; }
        public string To { get; set; }
        public DateTime OrderDate { get; set; }
        public string Edd { get; set; }

        public string Shipper { get; set; }
        public bool Critical { get; set; }
        public bool LogisticAck { get; set; }
        public bool TechnicAck { get; set; }




    }
}