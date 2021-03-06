﻿using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using MarAirAdmin.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;

namespace MarAirRoles.Models
{
    public class CustomUserRole : IdentityUserRole<int> { }
    public class CustomUserClaim : IdentityUserClaim<int> { }
    public class CustomUserLogin : IdentityUserLogin<int> { }

    public class CustomRole : IdentityRole<int, CustomUserRole>
    {
        public CustomRole() { }
        public CustomRole(string name) { Name = name; }
    }

    public class CustomUserStore : UserStore<ApplicationUser, CustomRole, int,
        CustomUserLogin, CustomUserRole, CustomUserClaim>
    {
        public CustomUserStore(ApplicationDbContext context)
            : base(context)
        {
        }
    }

    public class CustomRoleStore : RoleStore<CustomRole, int, CustomUserRole>
    {
        public CustomRoleStore(ApplicationDbContext context)
            : base(context)
        {
        }
    }
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser<int, CustomUserLogin, CustomUserRole,
        CustomUserClaim>
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser,int> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, CustomRole,
        int, CustomUserLogin, CustomUserRole, CustomUserClaim>
    {
        public ApplicationDbContext()
            : base("DefaultConnection")
        {
        }
        
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public DbSet<Assignments> Assignments { get; set; }
        public DbSet<Contracts> Contracts { get; set; }
        public DbSet<Crews> Crews { get; set; }
        public DbSet<Flights> Flights { get; set; }
        public DbSet<GroundCourses> GroundCourses { get; set; }
        public DbSet<Leaves> Leaves { get; set; }
        public DbSet<Licences> Licenses { get; set; }
        public DbSet<NomAircrafts> NomAircrafts { get; set; }
        public DbSet<NomActivities> NomActivities { get; set; }
        public DbSet<NomAirports> NomAirports { get; set; }
        public DbSet<NomPositions> NomPositions { get; set; }
        public DbSet<NomRules> NomRules { get; set; }
        public DbSet<Others> Others { get; set; }
        public DbSet<Passengers> Passengers { get; set; }
        public DbSet<PersonalData> PersonalData { get; set; }
        public DbSet<Positionings> Positionings { get; set; }
        public DbSet<Rest> Rest { get; set; }
        public DbSet<Rules> Rules { get; set; }
        public DbSet<ScheduleChanges> ScheduleChanges { get; set; }
        public DbSet<SSRs> SSRs { get; set; }
        public DbSet<TextMessages> TextMessages { get; set; }
        public DbSet<DelayCode> DelayCodes { get; set; }
        public DbSet<CompanyFlights> CompanyFlights { get; set; }
        public DbSet<CabinRules> CabinRules { get; set; }
        public DbSet<Courses> Courses { get; set; }
        public DbSet<CourseSections> CourseSections { get; set; }
        public DbSet<FlightForm> FlightForm { get; set; }
        public DbSet<FormSections> FormSections { get; set; }
        public DbSet<Journeys> Journeys { get; set; }
        public DbSet<LineCheck> LineCheck { get; set; }
        public DbSet<Mockup> Mockup { get; set; }
        public DbSet<NomCourses> NomCourses { get; set; }
        public DbSet<NomFlightForms> NomFlightForms { get; set; }
        public DbSet<NomLineCheckForms> NomLineCheckForms { get; set; }
        public DbSet<NomMockupForms> NomMockupForms { get; set; }
        public DbSet<PartNumbers> PartNumbers { get; set; }
        public DbSet<ReportedDelays> ReportedDelays { get; set; }
        public DbSet<Shipments> Shipments { get; set; }
        public DbSet<Simulator> Simulator { get; set; }
        public DbSet<UserActions> UserActions { get; set; }
        public DbSet<NomDevice> NomDevices { get; set; }
        public DbSet<NomInstructorType> NomInstructorTypes { get; set; }
        public DbSet<NomSimulator> NomSimulators { get; set; }
        public DbSet<RequestOff> RequestsOff { get; set; }
        public DbSet<RequestStaff> RequestsStaff { get; set; }
        public DbSet<RequestSwap> RequestsSwap { get; set; }
    }
}