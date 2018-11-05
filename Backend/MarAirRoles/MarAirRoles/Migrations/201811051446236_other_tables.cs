namespace MarAirRoles.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class other_tables : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.DelayCodes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        DelayCode = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.FlightExperiences",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CrewId = c.Int(nullable: false),
                        AirlineCompany = c.String(),
                        Position = c.String(),
                        Hours = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Crews", t => t.CrewId, cascadeDelete: true)
                .Index(t => t.CrewId);
            
            CreateTable(
                "dbo.Passports",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CrewId = c.Int(nullable: false),
                        PassNo = c.Int(nullable: false),
                        PassLciId = c.String(),
                        Country = c.String(),
                        City = c.String(),
                        ExpDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Crews", t => t.CrewId, cascadeDelete: true)
                .Index(t => t.CrewId);
            
            AddColumn("dbo.Assignments", "CreatedBy", c => c.String());
            AddColumn("dbo.Assignments", "AsgActiv", c => c.Boolean(nullable: false));
            AddColumn("dbo.Crews", "AlphaCode", c => c.String());
            AddColumn("dbo.Crews", "Sex", c => c.String());
            AddColumn("dbo.Contracts", "Signed", c => c.String());
            AddColumn("dbo.Contracts", "EmployeeType", c => c.String());
            AddColumn("dbo.Contracts", "AcfDomainLicense", c => c.String());
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Passports", "CrewId", "dbo.Crews");
            DropForeignKey("dbo.FlightExperiences", "CrewId", "dbo.Crews");
            DropIndex("dbo.Passports", new[] { "CrewId" });
            DropIndex("dbo.FlightExperiences", new[] { "CrewId" });
            DropColumn("dbo.Contracts", "AcfDomainLicense");
            DropColumn("dbo.Contracts", "EmployeeType");
            DropColumn("dbo.Contracts", "Signed");
            DropColumn("dbo.Crews", "Sex");
            DropColumn("dbo.Crews", "AlphaCode");
            DropColumn("dbo.Assignments", "AsgActiv");
            DropColumn("dbo.Assignments", "CreatedBy");
            DropTable("dbo.Passports");
            DropTable("dbo.FlightExperiences");
            DropTable("dbo.DelayCodes");
        }
    }
}
