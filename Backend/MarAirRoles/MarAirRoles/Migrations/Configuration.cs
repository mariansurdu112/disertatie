using MarAirRoles.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace MarAirRoles.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MarAirRoles.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(MarAirRoles.Models.ApplicationDbContext context)
        {
            var manager = new UserManager<ApplicationUser,int>(new CustomUserStore(new ApplicationDbContext()));
           /* var user = new ApplicationUser()
            {
                UserName = "admin",
                Email = "admin@gmail.com",
                EmailConfirmed = true,
            };*/
           // manager.Create(user, "MySuperP@ss!");
            var roleManager = new RoleManager<CustomRole, int>(new RoleStore<CustomRole, int, CustomUserRole>(context));
            if (!roleManager.RoleExists("Admin"))
            {
                var role = new CustomRole();
                role.Name = "Admin";
                roleManager.Create(role);
            }
            if (!roleManager.RoleExists("Scheduler"))
            {
                var role = new CustomRole();
                role.Name = "Scheduler";
                roleManager.Create(role);
            }
            if (!roleManager.RoleExists("Manager"))
            {
                var role = new CustomRole();
                role.Name = "Manager";
                roleManager.Create(role);
            }
            if (!roleManager.RoleExists("HResource"))
            {
                var role = new CustomRole();
                role.Name = "HResource";
                roleManager.Create(role);
            }
            if (!roleManager.RoleExists("Logistic"))
            {
                var role = new CustomRole();
                role.Name = "Logistic";
                roleManager.Create(role);
            }
            // manager.AddToRoles(1, "Admin");
        }
    }
}
