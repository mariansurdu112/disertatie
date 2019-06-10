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
    public class NomActivitiesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/NomActivities
        public IQueryable<NomActivities> GetNomActivities()
        {
            return db.NomActivities;
        }

        // GET: api/NomActivities/5
        [ResponseType(typeof(NomActivities))]
        public async Task<IHttpActionResult> GetNomActivities(int id)
        {
            NomActivities nomActivities = await db.NomActivities.FindAsync(id);
            if (nomActivities == null)
            {
                return NotFound();
            }

            return Ok(nomActivities);
        }

        // PUT: api/NomActivities/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutNomActivities(int id, NomActivities nomActivities)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nomActivities.Id)
            {
                return BadRequest();
            }

            db.Entry(nomActivities).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NomActivitiesExists(id))
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

        // POST: api/NomActivities
        [ResponseType(typeof(NomActivities))]
        public async Task<IHttpActionResult> PostNomActivities(NomActivities nomActivities)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.NomActivities.Add(nomActivities);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = nomActivities.Id }, nomActivities);
        }

        // DELETE: api/NomActivities/5
        [ResponseType(typeof(NomActivities))]
        public async Task<IHttpActionResult> DeleteNomActivities(int id)
        {
            NomActivities nomActivities = await db.NomActivities.FindAsync(id);
            if (nomActivities == null)
            {
                return NotFound();
            }

            db.NomActivities.Remove(nomActivities);
            await db.SaveChangesAsync();

            return Ok(nomActivities);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NomActivitiesExists(int id)
        {
            return db.NomActivities.Count(e => e.Id == id) > 0;
        }
    }
}