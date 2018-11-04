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
    public class PassengersController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Passengers
        public IQueryable<Passengers> GetPassengers()
        {
            return db.Passengers;
        }

        // GET: api/Passengers/5
        [ResponseType(typeof(Passengers))]
        public async Task<IHttpActionResult> GetPassengers(int id)
        {
            Passengers passengers = await db.Passengers.FindAsync(id);
            if (passengers == null)
            {
                return NotFound();
            }

            return Ok(passengers);
        }

        // PUT: api/Passengers/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPassengers(int id, Passengers passengers)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != passengers.Id)
            {
                return BadRequest();
            }

            db.Entry(passengers).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PassengersExists(id))
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

        // POST: api/Passengers
        [ResponseType(typeof(Passengers))]
        public async Task<IHttpActionResult> PostPassengers(Passengers passengers)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Passengers.Add(passengers);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = passengers.Id }, passengers);
        }

        // DELETE: api/Passengers/5
        [ResponseType(typeof(Passengers))]
        public async Task<IHttpActionResult> DeletePassengers(int id)
        {
            Passengers passengers = await db.Passengers.FindAsync(id);
            if (passengers == null)
            {
                return NotFound();
            }

            db.Passengers.Remove(passengers);
            await db.SaveChangesAsync();

            return Ok(passengers);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PassengersExists(int id)
        {
            return db.Passengers.Count(e => e.Id == id) > 0;
        }
    }
}