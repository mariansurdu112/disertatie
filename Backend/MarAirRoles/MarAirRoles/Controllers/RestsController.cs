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
    public class RestsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Rests
        public IQueryable<Rest> GetRest()
        {
            return db.Rest;
        }

        // GET: api/Rests/5
        [ResponseType(typeof(Rest))]
        public async Task<IHttpActionResult> GetRest(int id)
        {
            Rest rest = await db.Rest.FindAsync(id);
            if (rest == null)
            {
                return NotFound();
            }

            return Ok(rest);
        }

        // PUT: api/Rests/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutRest(int id, Rest rest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != rest.Id)
            {
                return BadRequest();
            }

            db.Entry(rest).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RestExists(id))
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

        // POST: api/Rests
        [ResponseType(typeof(Rest))]
        public async Task<IHttpActionResult> PostRest(Rest rest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Rest.Add(rest);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = rest.Id }, rest);
        }

        // DELETE: api/Rests/5
        [ResponseType(typeof(Rest))]
        public async Task<IHttpActionResult> DeleteRest(int id)
        {
            Rest rest = await db.Rest.FindAsync(id);
            if (rest == null)
            {
                return NotFound();
            }

            db.Rest.Remove(rest);
            await db.SaveChangesAsync();

            return Ok(rest);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RestExists(int id)
        {
            return db.Rest.Count(e => e.Id == id) > 0;
        }
    }
}