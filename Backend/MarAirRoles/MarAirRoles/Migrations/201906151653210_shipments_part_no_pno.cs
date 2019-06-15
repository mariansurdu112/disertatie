namespace MarAirRoles.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class shipments_part_no_pno : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.PartNumbers", "PartNo", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.PartNumbers", "PartNo");
        }
    }
}
