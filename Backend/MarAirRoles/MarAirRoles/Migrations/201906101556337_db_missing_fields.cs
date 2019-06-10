namespace MarAirRoles.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class db_missing_fields : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.NomAirports", "OperationalBase", c => c.Boolean(nullable: false));
            AddColumn("dbo.NomAirports", "FuelDensity", c => c.String());
            AddColumn("dbo.NomAirports", "Category", c => c.String());
            AddColumn("dbo.NomAirports", "TaxiIn", c => c.Int(nullable: false));
            AddColumn("dbo.NomAirports", "TaxiOut", c => c.Int(nullable: false));
            AddColumn("dbo.NomAirports", "Sector", c => c.String());
            AddColumn("dbo.NomAirports", "Country", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.NomAirports", "Country");
            DropColumn("dbo.NomAirports", "Sector");
            DropColumn("dbo.NomAirports", "TaxiOut");
            DropColumn("dbo.NomAirports", "TaxiIn");
            DropColumn("dbo.NomAirports", "Category");
            DropColumn("dbo.NomAirports", "FuelDensity");
            DropColumn("dbo.NomAirports", "OperationalBase");
        }
    }
}
