using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;

namespace MarAirAdmin.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class CustomUserLogin : IdentityUserLogin<int> {
        [Key]
        public int Id { get; set; }
    }
    public class CustomUserRole : IdentityUserRole<int> {
        [Key]
        public int Id { get; set; }
    }
    public class ApplicationRole : IdentityRole<int, CustomUserRole>
    {
        public ApplicationRole() { }
        public ApplicationRole(string name) { Name = name; }
    }
    public class CustomUserClaim : IdentityUserClaim<int> { }
    public class ApplicationUser : IdentityUser<int, CustomUserLogin, CustomUserRole, CustomUserClaim>
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser,int> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class CustomRoleStore : RoleStore<ApplicationRole, int, CustomUserRole>
    {
        public CustomRoleStore(ApplicationDbContext context)
            : base(context)
        {
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, int, CustomUserLogin, CustomUserRole, CustomUserClaim>
    {
        public ApplicationDbContext()
            : base("DefaultConnection")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<IdentityUserClaim>()
          .HasKey(r => new { r.Id })
          .ToTable("AspNetUserClaims");
            /*modelBuilder.Entity<IdentityUserLogin>().HasKey(c =>new { c.UserId,c.LoginProvider,c.ProviderKey }).ToTable("IdentityUserLogin");
            modelBuilder.Entity<IdentityUserRole>()
            .HasKey(r => new { r.UserId, r.RoleId })
            .ToTable("AspNetUserRoles");
           
            modelBuilder.Entity<IdentityUserLogin>()
          .HasKey(r => new { r.UserId,r.LoginProvider,r.ProviderKey })
          .ToTable("AspNetUserLogins");
            modelBuilder.Entity<Assignments>().HasKey(c => c.Id);
            modelBuilder.Entity<Contracts>().HasKey(c => c.Id);
            modelBuilder.Entity<Crews>().HasKey(c => c.Id);
            modelBuilder.Entity<Flights>().HasKey(c => c.Id);
            modelBuilder.Entity<GroundCourses>().HasKey(c => c.Id);
            modelBuilder.Entity<Leaves>().HasKey(c => c.Id);
            modelBuilder.Entity<Licences>().HasKey(c => c.Id);
            modelBuilder.Entity<NomAircrafts>().HasKey(c => c.Id);
            modelBuilder.Entity<NomActivities>().HasKey(c => c.Id);
            modelBuilder.Entity<NomAirports>().HasKey(c => c.Id);
            modelBuilder.Entity<NomPositions>().HasKey(c => c.Id);
            modelBuilder.Entity<NomRules>().HasKey(c => c.Id);
            modelBuilder.Entity<Others>().HasKey(c => c.Id);
            modelBuilder.Entity<Passengers>().HasKey(c => c.Id);
            modelBuilder.Entity<PersonalData>().HasKey(c => c.Id);
            modelBuilder.Entity<Positionings>().HasKey(c => c.Id);
            modelBuilder.Entity<Rest>().HasKey(c => c.Id);
            modelBuilder.Entity<Rules>().HasKey(c => c.Id);
            modelBuilder.Entity<ScheduleChanges>().HasKey(c => c.Id);
            modelBuilder.Entity<SSRs>().HasKey(c => c.Id);
            modelBuilder.Entity<TextMessages>().HasKey(c => c.Id);*/

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

    }
}