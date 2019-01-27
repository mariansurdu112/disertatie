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
using MarAirAdmin.Models;
using MarAirRoles.Models;

namespace MarAirRoles.Controllers
{
    public class FlightsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Flights
        public IQueryable<Flights> GetFlights()
        {
            return db.Flights;
        }

        // GET: api/Flights/5
        [ResponseType(typeof(Flights))]
        public async Task<IHttpActionResult> GetFlights(int id)
        {
            Flights flights = await db.Flights.FindAsync(id);
            if (flights == null)
            {
                return NotFound();
            }

            return Ok(flights);
        }

        // PUT: api/Flights/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutFlights(int id, Flights flights)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != flights.Id)
            {
                return BadRequest();
            }

            db.Entry(flights).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FlightsExists(id))
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

        // POST: api/Flights
        [ResponseType(typeof(Flights))]
        public async Task<IHttpActionResult> PostFlights(Flights flights)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Flights.Add(flights);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = flights.Id }, flights);
        }

        // DELETE: api/Flights/5
        [ResponseType(typeof(Flights))]
        public async Task<IHttpActionResult> DeleteFlights(int id)
        {
            Flights flights = await db.Flights.FindAsync(id);
            if (flights == null)
            {
                return NotFound();
            }

            db.Flights.Remove(flights);
            await db.SaveChangesAsync();

            return Ok(flights);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FlightsExists(int id)
        {
            return db.Flights.Count(e => e.Id == id) > 0;
        }
    }
}