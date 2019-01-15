namespace MarAirRoles.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class last1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Crews", "Gender", c => c.String());
            DropColumn("dbo.Crews", "Sex");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Crews", "Sex", c => c.String());
            DropColumn("dbo.Crews", "Gender");
        }
    }
}
