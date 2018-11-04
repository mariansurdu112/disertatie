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
    public class PositioningsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Positionings
        public IQueryable<Positionings> GetPositionings()
        {
            return db.Positionings;
        }

        // GET: api/Positionings/5
        [ResponseType(typeof(Positionings))]
        public async Task<IHttpActionResult> GetPositionings(int id)
        {
            Positionings positionings = await db.Positionings.FindAsync(id);
            if (positionings == null)
            {
                return NotFound();
            }

            return Ok(positionings);
        }

        // PUT: api/Positionings/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPositionings(int id, Positionings positionings)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != positionings.Id)
            {
                return BadRequest();
            }

            db.Entry(positionings).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PositioningsExists(id))
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

        // POST: api/Positionings
        [ResponseType(typeof(Positionings))]
        public async Task<IHttpActionResult> PostPositionings(Positionings positionings)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Positionings.Add(positionings);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = positionings.Id }, positionings);
        }

        // DELETE: api/Positionings/5
        [ResponseType(typeof(Positionings))]
        public async Task<IHttpActionResult> DeletePositionings(int id)
        {
            Positionings positionings = await db.Positionings.FindAsync(id);
            if (positionings == null)
            {
                return NotFound();
            }

            db.Positionings.Remove(positionings);
            await db.SaveChangesAsync();

            return Ok(positionings);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PositioningsExists(int id)
        {
            return db.Positionings.Count(e => e.Id == id) > 0;
        }
    }
}