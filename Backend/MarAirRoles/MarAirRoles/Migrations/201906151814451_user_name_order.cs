namespace MarAirRoles.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class user_name_order : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Shipments", "UserName", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Shipments", "UserName");
        }
    }
}
