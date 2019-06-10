using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using MarAirRoles.Models;

namespace MarAirRoles.Controllers
{
    public abstract class BaseSqlController:ApiController
    {
        protected Lazy<ApplicationDbContext> SqlContext { get; set; }

        protected BaseSqlController()
        {
            SqlContext=new Lazy<ApplicationDbContext>();
        }
    }
}