namespace MarAirRoles.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class db_missing_tables : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Flights", "DelayCodeId", "dbo.DelayCodes");
            DropIndex("dbo.Flights", new[] { "DelayCodeId" });
            CreateTable(
                "dbo.CabinRules",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Rule = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Courses",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CrewId = c.Int(nullable: false),
                        NomCourseId = c.Int(nullable: false),
                        Date = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Courses", t => t.NomCourseId)
                .ForeignKey("dbo.Crews", t => t.CrewId, cascadeDelete: true)
                .Index(t => t.CrewId)
                .Index(t => t.NomCourseId);
            
            CreateTable(
                "dbo.CourseSections",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CourseId = c.Int(nullable: false),
                        Mockup = c.Boolean(nullable: false),
                        Simulator = c.Boolean(nullable: false),
                        Flight = c.Boolean(nullable: false),
                        LineCheck = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Courses", t => t.CourseId, cascadeDelete: true)
                .Index(t => t.CourseId);
            
            CreateTable(
                "dbo.FlightForms",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        InstructorCrewId = c.Int(nullable: false),
                        DeviceId = c.Int(),
                        InstructorTypeId = c.Int(nullable: false),
                        FormId = c.Int(nullable: false),
                        Date = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.NomDevices", t => t.DeviceId)
                .ForeignKey("dbo.NomFlightForms", t => t.FormId, cascadeDelete: true)
                .ForeignKey("dbo.Crews", t => t.InstructorCrewId, cascadeDelete: true)
                .ForeignKey("dbo.NomInstructorTypes", t => t.InstructorTypeId, cascadeDelete: true)
                .Index(t => t.InstructorCrewId)
                .Index(t => t.DeviceId)
                .Index(t => t.InstructorTypeId)
                .Index(t => t.FormId);
            
            CreateTable(
                "dbo.NomDevices",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Description = c.String(),
                        Location = c.String(),
                        RegistrationNo = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.NomFlightForms",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.NomInstructorTypes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.FormSections",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FormId = c.Int(nullable: false),
                        Type = c.String(),
                        SimulatorDetails = c.Boolean(nullable: false),
                        SimulatorSetUp = c.Boolean(nullable: false),
                        RemedialTraining = c.Boolean(nullable: false),
                        LineCheckDetails = c.Boolean(nullable: false),
                        UpgradeRecommendation = c.Boolean(nullable: false),
                        Exercises = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Journeys",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FlightId = c.Int(nullable: false),
                        Tobt = c.DateTime(nullable: false),
                        Tsat = c.DateTime(nullable: false),
                        Ctot = c.DateTime(nullable: false),
                        DoorClosed = c.DateTime(nullable: false),
                        ReportedBlockOn = c.DateTime(nullable: false),
                        ReportedBlockOff = c.DateTime(nullable: false),
                        Delayed = c.Boolean(nullable: false),
                        DelayDeparture = c.Int(nullable: false),
                        DelayArrival = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Flights", t => t.FlightId, cascadeDelete: true)
                .Index(t => t.FlightId);
            
            CreateTable(
                "dbo.LineChecks",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        InstructorCrewId = c.Int(nullable: false),
                        DeviceId = c.Int(),
                        InstructorTypeId = c.Int(nullable: false),
                        FormId = c.Int(nullable: false),
                        Date = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.NomDevices", t => t.DeviceId)
                .ForeignKey("dbo.NomLineCheckForms", t => t.FormId, cascadeDelete: true)
                .ForeignKey("dbo.Crews", t => t.InstructorCrewId, cascadeDelete: true)
                .ForeignKey("dbo.NomInstructorTypes", t => t.InstructorTypeId, cascadeDelete: true)
                .Index(t => t.InstructorCrewId)
                .Index(t => t.DeviceId)
                .Index(t => t.InstructorTypeId)
                .Index(t => t.FormId);
            
            CreateTable(
                "dbo.NomLineCheckForms",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Mockups",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        InstructorCrewId = c.Int(nullable: false),
                        DeviceId = c.Int(),
                        InstructorTypeId = c.Int(nullable: false),
                        FormId = c.Int(nullable: false),
                        Date = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.NomDevices", t => t.DeviceId)
                .ForeignKey("dbo.NomMockupForms", t => t.FormId, cascadeDelete: true)
                .ForeignKey("dbo.Crews", t => t.InstructorCrewId, cascadeDelete: true)
                .ForeignKey("dbo.NomInstructorTypes", t => t.InstructorTypeId, cascadeDelete: true)
                .Index(t => t.InstructorCrewId)
                .Index(t => t.DeviceId)
                .Index(t => t.InstructorTypeId)
                .Index(t => t.FormId);
            
            CreateTable(
                "dbo.NomMockupForms",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.NomCourses",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.PartNumbers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.ReportedDelays",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Time = c.Int(nullable: false),
                        FlightId = c.Int(nullable: false),
                        DelayCodeId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.DelayCodes", t => t.DelayCodeId, cascadeDelete: true)
                .ForeignKey("dbo.Flights", t => t.FlightId, cascadeDelete: true)
                .Index(t => t.FlightId)
                .Index(t => t.DelayCodeId);
            
            CreateTable(
                "dbo.Shipments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        OrderNumber = c.String(),
                        RequirementNumber = c.String(),
                        RequirementPriority = c.String(),
                        PartNo = c.Int(nullable: false),
                        Ordered = c.Int(nullable: false),
                        Delivered = c.Int(nullable: false),
                        Awb = c.String(),
                        UserId = c.Int(nullable: false),
                        Aircraft = c.Int(nullable: false),
                        From = c.String(),
                        To = c.String(),
                        OrderDate = c.DateTime(nullable: false),
                        Edd = c.String(),
                        Shipper = c.String(),
                        Critical = c.Boolean(nullable: false),
                        LogisticAck = c.Boolean(nullable: false),
                        TechnicAck = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.NomAircrafts", t => t.Aircraft, cascadeDelete: true)
                .ForeignKey("dbo.PartNumbers", t => t.PartNo, cascadeDelete: true)
                .Index(t => t.PartNo)
                .Index(t => t.Aircraft);
            
            CreateTable(
                "dbo.Simulators",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        InstructorCrewId = c.Int(nullable: false),
                        DeviceId = c.Int(),
                        InstructorTypeId = c.Int(nullable: false),
                        FormId = c.Int(nullable: false),
                        Date = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.NomDevices", t => t.DeviceId)
                .ForeignKey("dbo.NomSimulators", t => t.FormId, cascadeDelete: true)
                .ForeignKey("dbo.Crews", t => t.InstructorCrewId, cascadeDelete: true)
                .ForeignKey("dbo.NomInstructorTypes", t => t.InstructorTypeId, cascadeDelete: true)
                .Index(t => t.InstructorCrewId)
                .Index(t => t.DeviceId)
                .Index(t => t.InstructorTypeId)
                .Index(t => t.FormId);
            
            CreateTable(
                "dbo.NomSimulators",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.UserActions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Action = c.String(),
                        Admin = c.Boolean(nullable: false),
                        Manager = c.Boolean(nullable: false),
                        Planificator = c.Boolean(nullable: false),
                        Logistic = c.Boolean(nullable: false),
                        Technic = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Flights", "Gate", c => c.String());
            DropColumn("dbo.Flights", "DelayCodeId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Flights", "DelayCodeId", c => c.Int(nullable: false));
            DropForeignKey("dbo.Simulators", "InstructorTypeId", "dbo.NomInstructorTypes");
            DropForeignKey("dbo.Simulators", "InstructorCrewId", "dbo.Crews");
            DropForeignKey("dbo.Simulators", "FormId", "dbo.NomSimulators");
            DropForeignKey("dbo.Simulators", "DeviceId", "dbo.NomDevices");
            DropForeignKey("dbo.Shipments", "PartNo", "dbo.PartNumbers");
            DropForeignKey("dbo.Shipments", "Aircraft", "dbo.NomAircrafts");
            DropForeignKey("dbo.ReportedDelays", "FlightId", "dbo.Flights");
            DropForeignKey("dbo.ReportedDelays", "DelayCodeId", "dbo.DelayCodes");
            DropForeignKey("dbo.Mockups", "InstructorTypeId", "dbo.NomInstructorTypes");
            DropForeignKey("dbo.Mockups", "InstructorCrewId", "dbo.Crews");
            DropForeignKey("dbo.Mockups", "FormId", "dbo.NomMockupForms");
            DropForeignKey("dbo.Mockups", "DeviceId", "dbo.NomDevices");
            DropForeignKey("dbo.LineChecks", "InstructorTypeId", "dbo.NomInstructorTypes");
            DropForeignKey("dbo.LineChecks", "InstructorCrewId", "dbo.Crews");
            DropForeignKey("dbo.LineChecks", "FormId", "dbo.NomLineCheckForms");
            DropForeignKey("dbo.LineChecks", "DeviceId", "dbo.NomDevices");
            DropForeignKey("dbo.Journeys", "FlightId", "dbo.Flights");
            DropForeignKey("dbo.FlightForms", "InstructorTypeId", "dbo.NomInstructorTypes");
            DropForeignKey("dbo.FlightForms", "InstructorCrewId", "dbo.Crews");
            DropForeignKey("dbo.FlightForms", "FormId", "dbo.NomFlightForms");
            DropForeignKey("dbo.FlightForms", "DeviceId", "dbo.NomDevices");
            DropForeignKey("dbo.CourseSections", "CourseId", "dbo.Courses");
            DropForeignKey("dbo.Courses", "CrewId", "dbo.Crews");
            DropForeignKey("dbo.Courses", "NomCourseId", "dbo.Courses");
            DropIndex("dbo.Simulators", new[] { "FormId" });
            DropIndex("dbo.Simulators", new[] { "InstructorTypeId" });
            DropIndex("dbo.Simulators", new[] { "DeviceId" });
            DropIndex("dbo.Simulators", new[] { "InstructorCrewId" });
            DropIndex("dbo.Shipments", new[] { "Aircraft" });
            DropIndex("dbo.Shipments", new[] { "PartNo" });
            DropIndex("dbo.ReportedDelays", new[] { "DelayCodeId" });
            DropIndex("dbo.ReportedDelays", new[] { "FlightId" });
            DropIndex("dbo.Mockups", new[] { "FormId" });
            DropIndex("dbo.Mockups", new[] { "InstructorTypeId" });
            DropIndex("dbo.Mockups", new[] { "DeviceId" });
            DropIndex("dbo.Mockups", new[] { "InstructorCrewId" });
            DropIndex("dbo.LineChecks", new[] { "FormId" });
            DropIndex("dbo.LineChecks", new[] { "InstructorTypeId" });
            DropIndex("dbo.LineChecks", new[] { "DeviceId" });
            DropIndex("dbo.LineChecks", new[] { "InstructorCrewId" });
            DropIndex("dbo.Journeys", new[] { "FlightId" });
            DropIndex("dbo.FlightForms", new[] { "FormId" });
            DropIndex("dbo.FlightForms", new[] { "InstructorTypeId" });
            DropIndex("dbo.FlightForms", new[] { "DeviceId" });
            DropIndex("dbo.FlightForms", new[] { "InstructorCrewId" });
            DropIndex("dbo.CourseSections", new[] { "CourseId" });
            DropIndex("dbo.Courses", new[] { "NomCourseId" });
            DropIndex("dbo.Courses", new[] { "CrewId" });
            DropColumn("dbo.Flights", "Gate");
            DropTable("dbo.UserActions");
            DropTable("dbo.NomSimulators");
            DropTable("dbo.Simulators");
            DropTable("dbo.Shipments");
            DropTable("dbo.ReportedDelays");
            DropTable("dbo.PartNumbers");
            DropTable("dbo.NomCourses");
            DropTable("dbo.NomMockupForms");
            DropTable("dbo.Mockups");
            DropTable("dbo.NomLineCheckForms");
            DropTable("dbo.LineChecks");
            DropTable("dbo.Journeys");
            DropTable("dbo.FormSections");
            DropTable("dbo.NomInstructorTypes");
            DropTable("dbo.NomFlightForms");
            DropTable("dbo.NomDevices");
            DropTable("dbo.FlightForms");
            DropTable("dbo.CourseSections");
            DropTable("dbo.Courses");
            DropTable("dbo.CabinRules");
            CreateIndex("dbo.Flights", "DelayCodeId");
            AddForeignKey("dbo.Flights", "DelayCodeId", "dbo.DelayCodes", "Id", cascadeDelete: true);
        }
    }
}
