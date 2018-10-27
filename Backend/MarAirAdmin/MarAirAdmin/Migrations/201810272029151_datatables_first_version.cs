namespace MarAirAdmin.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class datatables_first_version : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.AspNetRoles", newName: "IdentityRoles");
            RenameTable(name: "dbo.AspNetUsers", newName: "ApplicationUsers");
            DropForeignKey("dbo.AspNetUserRoles", "RoleId", "dbo.AspNetRoles");
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserLogins", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserRoles", "UserId", "dbo.AspNetUsers");
            DropIndex("dbo.IdentityRoles", "RoleNameIndex");
            DropIndex("dbo.AspNetUserRoles", new[] { "UserId" });
            DropIndex("dbo.AspNetUserRoles", new[] { "RoleId" });
            DropIndex("dbo.ApplicationUsers", "UserNameIndex");
            DropIndex("dbo.AspNetUserClaims", new[] { "UserId" });
            DropIndex("dbo.AspNetUserLogins", new[] { "UserId" });
            DropPrimaryKey("dbo.AspNetUserLogins");
            CreateTable(
                "dbo.Assignments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        StartTime = c.DateTime(nullable: false),
                        EndTime = c.DateTime(nullable: false),
                        AsgType = c.Int(nullable: false),
                        FlightId = c.Int(nullable: false),
                        OtherId = c.Int(nullable: false),
                        LeaveId = c.Int(nullable: false),
                        GroundCourseId = c.Int(nullable: false),
                        RestId = c.Int(nullable: false),
                        PositioningId = c.Int(nullable: false),
                        ModifiedBy = c.String(maxLength: 128),
                        LastUpdate = c.DateTime(nullable: false),
                        CrewId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.NomActivities", t => t.AsgType, cascadeDelete: true)
                .ForeignKey("dbo.Crews", t => t.CrewId, cascadeDelete: true)
                .ForeignKey("dbo.Flights", t => t.FlightId, cascadeDelete: true)
                .ForeignKey("dbo.GroundCourses", t => t.GroundCourseId, cascadeDelete: true)
                .ForeignKey("dbo.Leaves", t => t.LeaveId, cascadeDelete: true)
                .ForeignKey("dbo.Others", t => t.OtherId, cascadeDelete: true)
                .ForeignKey("dbo.Positionings", t => t.PositioningId, cascadeDelete: true)
                .ForeignKey("dbo.Rests", t => t.RestId, cascadeDelete: true)
                .ForeignKey("dbo.ApplicationUsers", t => t.ModifiedBy)
                .Index(t => t.AsgType)
                .Index(t => t.FlightId)
                .Index(t => t.OtherId)
                .Index(t => t.LeaveId)
                .Index(t => t.GroundCourseId)
                .Index(t => t.RestId)
                .Index(t => t.PositioningId)
                .Index(t => t.ModifiedBy)
                .Index(t => t.CrewId);
            
            CreateTable(
                "dbo.NomActivities",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ActivityName = c.String(),
                        Code = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Crews",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Firstname = c.String(),
                        Lastname = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Flights",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ReportingTime = c.DateTime(nullable: false),
                        TakeOffTime = c.DateTime(nullable: false),
                        ArrivalTime = c.DateTime(nullable: false),
                        FlightNumber = c.String(),
                        AircraftId = c.Int(nullable: false),
                        EstimatedTakeOff = c.DateTime(nullable: false),
                        EstimatedArrival = c.DateTime(nullable: false),
                        FlightTime = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.NomAircrafts", t => t.AircraftId, cascadeDelete: true)
                .Index(t => t.AircraftId);
            
            CreateTable(
                "dbo.NomAircrafts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        AircraftName = c.String(),
                        RegistrationNumber = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.GroundCourses",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Type = c.String(),
                        Start = c.DateTime(nullable: false),
                        End = c.DateTime(nullable: false),
                        Passed = c.Boolean(nullable: false),
                        Location = c.String(),
                        Remarks = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Leaves",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Start = c.DateTime(nullable: false),
                        Type = c.String(),
                        End = c.DateTime(nullable: false),
                        Remarks = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Others",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Start = c.DateTime(nullable: false),
                        End = c.DateTime(nullable: false),
                        Activity = c.String(),
                        Remarks = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Positionings",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Start = c.DateTime(nullable: false),
                        Type = c.String(),
                        DepartureTime = c.String(),
                        ArrivalTime = c.String(),
                        From = c.String(),
                        To = c.String(),
                        End = c.DateTime(nullable: false),
                        Remarks = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Rests",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Start = c.DateTime(nullable: false),
                        End = c.DateTime(nullable: false),
                        Remarks = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Contracts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CrewId = c.Int(nullable: false),
                        ExpiryDate = c.DateTime(nullable: false),
                        Implied = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Crews", t => t.CrewId, cascadeDelete: true)
                .Index(t => t.CrewId);
            
            CreateTable(
                "dbo.Licences",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CrewId = c.Int(nullable: false),
                        Type = c.String(),
                        ExpiryDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Crews", t => t.CrewId, cascadeDelete: true)
                .Index(t => t.CrewId);
            
            CreateTable(
                "dbo.NomAirports",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Location = c.String(),
                        IataCode = c.String(),
                        Latitude = c.Double(nullable: false),
                        Longitude = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.NomPositions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Label = c.String(),
                        Code = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.NomRules",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Code = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Passengers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        PCode = c.String(),
                        No = c.Int(nullable: false),
                        FlightId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Flights", t => t.FlightId, cascadeDelete: true)
                .Index(t => t.FlightId);
            
            CreateTable(
                "dbo.PersonalDatas",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CrewId = c.Int(nullable: false),
                        Phone = c.String(),
                        CarrierCode = c.String(),
                        Email = c.String(),
                        CIExpiryDate = c.DateTime(nullable: false),
                        BirthDate = c.DateTime(nullable: false),
                        EmPhone = c.String(),
                        EmCarrierCode = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Crews", t => t.CrewId, cascadeDelete: true)
                .Index(t => t.CrewId);
            
            CreateTable(
                "dbo.Rules",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        RuleId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.NomRules", t => t.RuleId, cascadeDelete: true)
                .Index(t => t.RuleId);
            
            CreateTable(
                "dbo.ScheduleChanges",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CrewId = c.Int(nullable: false),
                        Message = c.String(),
                        SceduleDate = c.DateTime(nullable: false),
                        Sent = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Crews", t => t.CrewId, cascadeDelete: true)
                .Index(t => t.CrewId);
            
            CreateTable(
                "dbo.SSRs",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        SSRCode = c.String(),
                        No = c.Int(nullable: false),
                        FlightId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Flights", t => t.FlightId, cascadeDelete: true)
                .Index(t => t.FlightId);
            
            CreateTable(
                "dbo.TextMessages",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CrewId = c.Int(nullable: false),
                        Message = c.String(),
                        Date = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Crews", t => t.CrewId, cascadeDelete: true)
                .Index(t => t.CrewId);
            
            AddColumn("dbo.AspNetUserRoles", "ApplicationUser_Id", c => c.String(maxLength: 128));
            AddColumn("dbo.AspNetUserRoles", "IdentityRole_Id", c => c.String(maxLength: 128));
            AddColumn("dbo.AspNetUserClaims", "ApplicationUser_Id", c => c.String(maxLength: 128));
            AddColumn("dbo.AspNetUserLogins", "ApplicationUser_Id", c => c.String(maxLength: 128));
            AlterColumn("dbo.IdentityRoles", "Name", c => c.String());
            AlterColumn("dbo.ApplicationUsers", "Email", c => c.String());
            AlterColumn("dbo.ApplicationUsers", "UserName", c => c.String());
            AlterColumn("dbo.AspNetUserClaims", "UserId", c => c.String());
            AddPrimaryKey("dbo.AspNetUserLogins", new[] { "UserId", "LoginProvider", "ProviderKey" });
            CreateIndex("dbo.AspNetUserClaims", "ApplicationUser_Id");
            CreateIndex("dbo.AspNetUserLogins", "ApplicationUser_Id");
            CreateIndex("dbo.AspNetUserRoles", "ApplicationUser_Id");
            CreateIndex("dbo.AspNetUserRoles", "IdentityRole_Id");
            AddForeignKey("dbo.AspNetUserRoles", "IdentityRole_Id", "dbo.IdentityRoles", "Id");
            AddForeignKey("dbo.AspNetUserClaims", "ApplicationUser_Id", "dbo.ApplicationUsers", "Id");
            AddForeignKey("dbo.AspNetUserLogins", "ApplicationUser_Id", "dbo.ApplicationUsers", "Id");
            AddForeignKey("dbo.AspNetUserRoles", "ApplicationUser_Id", "dbo.ApplicationUsers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AspNetUserRoles", "ApplicationUser_Id", "dbo.ApplicationUsers");
            DropForeignKey("dbo.AspNetUserLogins", "ApplicationUser_Id", "dbo.ApplicationUsers");
            DropForeignKey("dbo.AspNetUserClaims", "ApplicationUser_Id", "dbo.ApplicationUsers");
            DropForeignKey("dbo.AspNetUserRoles", "IdentityRole_Id", "dbo.IdentityRoles");
            DropForeignKey("dbo.TextMessages", "CrewId", "dbo.Crews");
            DropForeignKey("dbo.SSRs", "FlightId", "dbo.Flights");
            DropForeignKey("dbo.ScheduleChanges", "CrewId", "dbo.Crews");
            DropForeignKey("dbo.Rules", "RuleId", "dbo.NomRules");
            DropForeignKey("dbo.PersonalDatas", "CrewId", "dbo.Crews");
            DropForeignKey("dbo.Passengers", "FlightId", "dbo.Flights");
            DropForeignKey("dbo.Licences", "CrewId", "dbo.Crews");
            DropForeignKey("dbo.Contracts", "CrewId", "dbo.Crews");
            DropForeignKey("dbo.Assignments", "ModifiedBy", "dbo.ApplicationUsers");
            DropForeignKey("dbo.Assignments", "RestId", "dbo.Rests");
            DropForeignKey("dbo.Assignments", "PositioningId", "dbo.Positionings");
            DropForeignKey("dbo.Assignments", "OtherId", "dbo.Others");
            DropForeignKey("dbo.Assignments", "LeaveId", "dbo.Leaves");
            DropForeignKey("dbo.Assignments", "GroundCourseId", "dbo.GroundCourses");
            DropForeignKey("dbo.Assignments", "FlightId", "dbo.Flights");
            DropForeignKey("dbo.Flights", "AircraftId", "dbo.NomAircrafts");
            DropForeignKey("dbo.Assignments", "CrewId", "dbo.Crews");
            DropForeignKey("dbo.Assignments", "AsgType", "dbo.NomActivities");
            DropIndex("dbo.TextMessages", new[] { "CrewId" });
            DropIndex("dbo.SSRs", new[] { "FlightId" });
            DropIndex("dbo.ScheduleChanges", new[] { "CrewId" });
            DropIndex("dbo.Rules", new[] { "RuleId" });
            DropIndex("dbo.PersonalDatas", new[] { "CrewId" });
            DropIndex("dbo.Passengers", new[] { "FlightId" });
            DropIndex("dbo.Licences", new[] { "CrewId" });
            DropIndex("dbo.Contracts", new[] { "CrewId" });
            DropIndex("dbo.AspNetUserRoles", new[] { "IdentityRole_Id" });
            DropIndex("dbo.AspNetUserRoles", new[] { "ApplicationUser_Id" });
            DropIndex("dbo.AspNetUserLogins", new[] { "ApplicationUser_Id" });
            DropIndex("dbo.AspNetUserClaims", new[] { "ApplicationUser_Id" });
            DropIndex("dbo.Flights", new[] { "AircraftId" });
            DropIndex("dbo.Assignments", new[] { "CrewId" });
            DropIndex("dbo.Assignments", new[] { "ModifiedBy" });
            DropIndex("dbo.Assignments", new[] { "PositioningId" });
            DropIndex("dbo.Assignments", new[] { "RestId" });
            DropIndex("dbo.Assignments", new[] { "GroundCourseId" });
            DropIndex("dbo.Assignments", new[] { "LeaveId" });
            DropIndex("dbo.Assignments", new[] { "OtherId" });
            DropIndex("dbo.Assignments", new[] { "FlightId" });
            DropIndex("dbo.Assignments", new[] { "AsgType" });
            DropPrimaryKey("dbo.AspNetUserLogins");
            AlterColumn("dbo.AspNetUserClaims", "UserId", c => c.String(nullable: false, maxLength: 128));
            AlterColumn("dbo.ApplicationUsers", "UserName", c => c.String(nullable: false, maxLength: 256));
            AlterColumn("dbo.ApplicationUsers", "Email", c => c.String(maxLength: 256));
            AlterColumn("dbo.IdentityRoles", "Name", c => c.String(nullable: false, maxLength: 256));
            DropColumn("dbo.AspNetUserLogins", "ApplicationUser_Id");
            DropColumn("dbo.AspNetUserClaims", "ApplicationUser_Id");
            DropColumn("dbo.AspNetUserRoles", "IdentityRole_Id");
            DropColumn("dbo.AspNetUserRoles", "ApplicationUser_Id");
            DropTable("dbo.TextMessages");
            DropTable("dbo.SSRs");
            DropTable("dbo.ScheduleChanges");
            DropTable("dbo.Rules");
            DropTable("dbo.PersonalDatas");
            DropTable("dbo.Passengers");
            DropTable("dbo.NomRules");
            DropTable("dbo.NomPositions");
            DropTable("dbo.NomAirports");
            DropTable("dbo.Licences");
            DropTable("dbo.Contracts");
            DropTable("dbo.Rests");
            DropTable("dbo.Positionings");
            DropTable("dbo.Others");
            DropTable("dbo.Leaves");
            DropTable("dbo.GroundCourses");
            DropTable("dbo.NomAircrafts");
            DropTable("dbo.Flights");
            DropTable("dbo.Crews");
            DropTable("dbo.NomActivities");
            DropTable("dbo.Assignments");
            AddPrimaryKey("dbo.AspNetUserLogins", new[] { "LoginProvider", "ProviderKey", "UserId" });
            CreateIndex("dbo.AspNetUserLogins", "UserId");
            CreateIndex("dbo.AspNetUserClaims", "UserId");
            CreateIndex("dbo.ApplicationUsers", "UserName", unique: true, name: "UserNameIndex");
            CreateIndex("dbo.AspNetUserRoles", "RoleId");
            CreateIndex("dbo.AspNetUserRoles", "UserId");
            CreateIndex("dbo.IdentityRoles", "Name", unique: true, name: "RoleNameIndex");
            AddForeignKey("dbo.AspNetUserRoles", "UserId", "dbo.AspNetUsers", "Id", cascadeDelete: true);
            AddForeignKey("dbo.AspNetUserLogins", "UserId", "dbo.AspNetUsers", "Id", cascadeDelete: true);
            AddForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.AspNetUsers", "Id", cascadeDelete: true);
            AddForeignKey("dbo.AspNetUserRoles", "RoleId", "dbo.AspNetRoles", "Id", cascadeDelete: true);
            RenameTable(name: "dbo.ApplicationUsers", newName: "AspNetUsers");
            RenameTable(name: "dbo.IdentityRoles", newName: "AspNetRoles");
        }
    }
}
