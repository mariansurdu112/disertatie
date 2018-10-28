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
            var user = new ApplicationUser()
            {
                UserName = "admin",
                Email = "admin@gmail.com",
                EmailConfirmed = true,
            };
           // manager.Create(user, "MySuperP@ss!");
            var roleManager = new RoleManager<CustomRole, int>(new RoleStore<CustomRole, int, CustomUserRole>(context));
            if (!roleManager.RoleExists("Admin"))
            {
                //first we create Admin rool   
                var role = new CustomRole();
                role.Name = "Admin";
                roleManager.Create(role);
            }
            manager.AddToRoles(1, "Admin");

            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}
