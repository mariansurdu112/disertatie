using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using MarAirRoles.Models;

namespace MarAirRoles.Controllers
{
    public class CompanyFlightsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/CompanyFlights
        public IQueryable<CompanyFlights> GetCompanyFlights()
        {
            return db.CompanyFlights;
        }

        // GET: api/CompanyFlights/5
        [ResponseType(typeof(CompanyFlights))]
        public async Task<IHttpActionResult> GetCompanyFlights(int id)
        {
            CompanyFlights companyFlights = await db.CompanyFlights.FindAsync(id);
            if (companyFlights == null)
            {
                return NotFound();
            }

            return Ok(companyFlights);
        }

        // PUT: api/CompanyFlights/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCompanyFlights(int id, CompanyFlights companyFlights)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != companyFlights.Id)
            {
                return BadRequest();
            }

            db.Entry(companyFlights).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyFlightsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/CompanyFlights
        [ResponseType(typeof(CompanyFlights))]
        public async Task<IHttpActionResult> PostCompanyFlights(CompanyFlights companyFlights)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CompanyFlights.Add(companyFlights);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = companyFlights.Id }, companyFlights);
        }

        // DELETE: api/CompanyFlights/5
        [ResponseType(typeof(CompanyFlights))]
        public async Task<IHttpActionResult> DeleteCompanyFlights(int id)
        {
            CompanyFlights companyFlights = await db.CompanyFlights.FindAsync(id);
            if (companyFlights == null)
            {
                return NotFound();
            }

            db.CompanyFlights.Remove(companyFlights);
            await db.SaveChangesAsync();

            return Ok(companyFlights);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CompanyFlightsExists(int id)
        {
            return db.CompanyFlights.Count(e => e.Id == id) > 0;
        }
    }
}