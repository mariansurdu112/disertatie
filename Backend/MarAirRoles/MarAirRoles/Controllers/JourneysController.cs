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
    public class JourneysController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Journeys
        public IQueryable<Journeys> GetJourneys()
        {
            return db.Journeys;
        }

        // GET: api/Journeys/5
        [ResponseType(typeof(Journeys))]
        public async Task<IHttpActionResult> GetJourneys(int id)
        {
            Journeys journeys = await db.Journeys.FindAsync(id);
            if (journeys == null)
            {
                return NotFound();
            }

            return Ok(journeys);
        }

        // PUT: api/Journeys/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutJourneys(int id, Journeys journeys)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != journeys.Id)
            {
                return BadRequest();
            }

            db.Entry(journeys).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JourneysExists(id))
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

        // POST: api/Journeys
        [ResponseType(typeof(Journeys))]
        public async Task<IHttpActionResult> PostJourneys(Journeys journeys)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Journeys.Add(journeys);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = journeys.Id }, journeys);
        }

        // DELETE: api/Journeys/5
        [ResponseType(typeof(Journeys))]
        public async Task<IHttpActionResult> DeleteJourneys(int id)
        {
            Journeys journeys = await db.Journeys.FindAsync(id);
            if (journeys == null)
            {
                return NotFound();
            }

            db.Journeys.Remove(journeys);
            await db.SaveChangesAsync();

            return Ok(journeys);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool JourneysExists(int id)
        {
            return db.Journeys.Count(e => e.Id == id) > 0;
        }
    }
}