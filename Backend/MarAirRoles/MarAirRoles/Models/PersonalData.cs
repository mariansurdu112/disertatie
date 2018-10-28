using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MarAirAdmin.Models
{
    public class PersonalData
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [ForeignKey("Crew")]
        public int CrewId { get; set; }
        public virtual Crews Crew { get; set; }
        public string Phone { get; set; }
        public string CarrierCode { get; set; }
        public string Email { get; set; }
        public DateTime CIExpiryDate { get; set; }
        public DateTime BirthDate { get; set; }
        public string EmPhone { get; set; }
        public string EmCarrierCode { get; set; }



    }

}