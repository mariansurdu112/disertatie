namespace MarAirRoles.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class other_tables3 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Passengers", "FlightId", "dbo.Flights");
            DropForeignKey("dbo.PersonalDatas", "CrewId", "dbo.Crews");
            DropForeignKey("dbo.SSRs", "FlightId", "dbo.Flights");
            DropIndex("dbo.Passengers", new[] { "FlightId" });
            DropIndex("dbo.PersonalDatas", new[] { "CrewId" });
            DropIndex("dbo.SSRs", new[] { "FlightId" });
            AddColumn("dbo.Positionings", "FlightNumber", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Positionings", "FlightNumber");
            CreateIndex("dbo.SSRs", "FlightId");
            CreateIndex("dbo.PersonalDatas", "CrewId");
            CreateIndex("dbo.Passengers", "FlightId");
            AddForeignKey("dbo.SSRs", "FlightId", "dbo.Flights", "Id", cascadeDelete: true);
            AddForeignKey("dbo.PersonalDatas", "CrewId", "dbo.Crews", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Passengers", "FlightId", "dbo.Flights", "Id", cascadeDelete: true);
        }
    }
}
