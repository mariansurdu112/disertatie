namespace MarAirRoles.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class rule_nom_changes : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.NomRules", "Rule", c => c.String());
            AddColumn("dbo.NomRules", "Area", c => c.String());
            DropColumn("dbo.NomRules", "Code");
        }
        
        public override void Down()
        {
            AddColumn("dbo.NomRules", "Code", c => c.String());
            DropColumn("dbo.NomRules", "Area");
            DropColumn("dbo.NomRules", "Rule");
        }
    }
}
