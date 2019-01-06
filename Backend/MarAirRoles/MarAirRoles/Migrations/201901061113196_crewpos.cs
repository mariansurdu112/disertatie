namespace MarAirRoles.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class crewpos : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CrewPositions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        PositionId = c.Int(nullable: false),
                        CrewId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Crews", t => t.CrewId, cascadeDelete: true)
                .ForeignKey("dbo.NomPositions", t => t.PositionId, cascadeDelete: true)
                .Index(t => t.PositionId)
                .Index(t => t.CrewId);
            
            AddColumn("dbo.Crews", "Active", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.CrewPositions", "PositionId", "dbo.NomPositions");
            DropForeignKey("dbo.CrewPositions", "CrewId", "dbo.Crews");
            DropIndex("dbo.CrewPositions", new[] { "CrewId" });
            DropIndex("dbo.CrewPositions", new[] { "PositionId" });
            DropColumn("dbo.Crews", "Active");
            DropTable("dbo.CrewPositions");
        }
    }
}
