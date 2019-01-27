namespace MarAirRoles.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class details_flt_flg : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.DelayCodes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Reason = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Flights", "DelayCodeId", c => c.Int(nullable: false));
            AddColumn("dbo.Flights", "Cycles", c => c.Int(nullable: false));
            AddColumn("dbo.Flights", "Day", c => c.Boolean(nullable: false));
            AddColumn("dbo.Flights", "EstimatedPax", c => c.Int(nullable: false));
            AddColumn("dbo.Flights", "Male", c => c.Int(nullable: false));
            AddColumn("dbo.Flights", "Female", c => c.Int(nullable: false));
            AddColumn("dbo.Flights", "Bags", c => c.Int(nullable: false));
            AddColumn("dbo.Flights", "Infants", c => c.Int(nullable: false));
            AddColumn("dbo.Flights", "WheelChairs", c => c.Int(nullable: false));
            AddColumn("dbo.NomAircrafts", "MaxCapacity", c => c.Int(nullable: false));
            AddColumn("dbo.NomAircrafts", "MaxFuel", c => c.Double(nullable: false));
            AddColumn("dbo.NomAircrafts", "BagCapacity", c => c.Int(nullable: false));
            AddColumn("dbo.NomAircrafts", "Cargo", c => c.Boolean(nullable: false));
            AddColumn("dbo.NomAircrafts", "AircraftPicture", c => c.String());
            AddColumn("dbo.NomAirports", "AirportPhoto", c => c.String());
            CreateIndex("dbo.Flights", "DelayCodeId");
            AddForeignKey("dbo.Flights", "DelayCodeId", "dbo.DelayCodes", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Flights", "DelayCodeId", "dbo.DelayCodes");
            DropIndex("dbo.Flights", new[] { "DelayCodeId" });
            DropColumn("dbo.NomAirports", "AirportPhoto");
            DropColumn("dbo.NomAircrafts", "AircraftPicture");
            DropColumn("dbo.NomAircrafts", "Cargo");
            DropColumn("dbo.NomAircrafts", "BagCapacity");
            DropColumn("dbo.NomAircrafts", "MaxFuel");
            DropColumn("dbo.NomAircrafts", "MaxCapacity");
            DropColumn("dbo.Flights", "WheelChairs");
            DropColumn("dbo.Flights", "Infants");
            DropColumn("dbo.Flights", "Bags");
            DropColumn("dbo.Flights", "Female");
            DropColumn("dbo.Flights", "Male");
            DropColumn("dbo.Flights", "EstimatedPax");
            DropColumn("dbo.Flights", "Day");
            DropColumn("dbo.Flights", "Cycles");
            DropColumn("dbo.Flights", "DelayCodeId");
            DropTable("dbo.DelayCodes");
        }
    }
}
