namespace MarAirRoles.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class company_flt : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CompanyFlights",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        From = c.String(),
                        To = c.String(),
                        IataDep = c.String(),
                        IataArr = c.String(),
                        RadioCallSign = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.CompanyFlights");
        }
    }
}
