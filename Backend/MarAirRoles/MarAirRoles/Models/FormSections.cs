using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MarAirRoles.Models
{
    public class FormSections
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int FormId { get; set; }
        public string Type { get; set; }

        public bool SimulatorDetails { get; set; }
        public bool SimulatorSetUp { get; set; }
        public bool RemedialTraining { get; set; }
        public bool LineCheckDetails { get; set; }
        public bool UpgradeRecommendation { get; set; }
        public bool Exercises { get; set; }
    }
}