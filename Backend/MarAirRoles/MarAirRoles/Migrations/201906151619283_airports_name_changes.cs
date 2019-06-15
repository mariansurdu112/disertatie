namespace MarAirRoles.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class airports_name_changes : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.NomAirports", "Name", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.NomAirports", "Name");
        }
    }
}
