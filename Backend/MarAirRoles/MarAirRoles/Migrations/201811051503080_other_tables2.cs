namespace MarAirRoles.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class other_tables2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.NomAircrafts", "IataGroup", c => c.String());
            AddColumn("dbo.NomAircrafts", "Seats", c => c.Int(nullable: false));
            AddColumn("dbo.NomAircrafts", "PoolId", c => c.Int(nullable: false));
            AddColumn("dbo.NomAircrafts", "Owner", c => c.String());
            AddColumn("dbo.NomAircrafts", "RegNo", c => c.String());
            AddColumn("dbo.NomAirports", "IcaoCode", c => c.String());
            AddColumn("dbo.NomAirports", "Name", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.NomAirports", "Name");
            DropColumn("dbo.NomAirports", "IcaoCode");
            DropColumn("dbo.NomAircrafts", "RegNo");
            DropColumn("dbo.NomAircrafts", "Owner");
            DropColumn("dbo.NomAircrafts", "PoolId");
            DropColumn("dbo.NomAircrafts", "Seats");
            DropColumn("dbo.NomAircrafts", "IataGroup");
        }
    }
}
