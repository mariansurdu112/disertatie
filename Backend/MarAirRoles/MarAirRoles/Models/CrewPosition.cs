//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using MarAirAdmin.Models;

namespace MarAirRoles.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class CrewPosition
    {
        public int Id { get; set; }
        public int PositionId { get; set; }
        public int CrewId { get; set; }
    
        public virtual Crews Crew { get; set; }
        public virtual NomPositions NomPosition { get; set; }
    }
}
