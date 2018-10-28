using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MarAirRoles.RequestModels
{
    public class AdminUser
    {
        public string Email { get; set; }
        public string Username { get; set; }
        public string Role { get; set; }
    }
}