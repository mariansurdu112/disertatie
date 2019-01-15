namespace MarAirRoles.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class last : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.CrewPositions", "PositionId", "dbo.NomPositions");
            DropIndex("dbo.CrewPositions", new[] { "PositionId" });
            AddColumn("dbo.CrewPositions", "NomPosition_Id", c => c.Int());
            CreateIndex("dbo.CrewPositions", "NomPosition_Id");
            AddForeignKey("dbo.CrewPositions", "NomPosition_Id", "dbo.NomPositions", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.CrewPositions", "NomPosition_Id", "dbo.NomPositions");
            DropIndex("dbo.CrewPositions", new[] { "NomPosition_Id" });
            DropColumn("dbo.CrewPositions", "NomPosition_Id");
            CreateIndex("dbo.CrewPositions", "PositionId");
            AddForeignKey("dbo.CrewPositions", "PositionId", "dbo.NomPositions", "Id", cascadeDelete: true);
        }
    }
}
