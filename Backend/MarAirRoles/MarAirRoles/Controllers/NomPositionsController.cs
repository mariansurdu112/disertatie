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
    public class NomPositionsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/NomPositions
        public IQueryable<NomPositions> GetNomPositions()
        {
            return db.NomPositions;
        }

        // GET: api/NomPositions/5
        [ResponseType(typeof(NomPositions))]
        public async Task<IHttpActionResult> GetNomPositions(int id)
        {
            NomPositions nomPositions = await db.NomPositions.FindAsync(id);
            if (nomPositions == null)
            {
                return NotFound();
            }

            return Ok(nomPositions);
        }

        // PUT: api/NomPositions/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutNomPositions(int id, NomPositions nomPositions)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nomPositions.Id)
            {
                return BadRequest();
            }

            db.Entry(nomPositions).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NomPositionsExists(id))
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

        // POST: api/NomPositions
        [ResponseType(typeof(NomPositions))]
        public async Task<IHttpActionResult> PostNomPositions(NomPositions nomPositions)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.NomPositions.Add(nomPositions);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = nomPositions.Id }, nomPositions);
        }

        // DELETE: api/NomPositions/5
        [ResponseType(typeof(NomPositions))]
        public async Task<IHttpActionResult> DeleteNomPositions(int id)
        {
            NomPositions nomPositions = await db.NomPositions.FindAsync(id);
            if (nomPositions == null)
            {
                return NotFound();
            }

            db.NomPositions.Remove(nomPositions);
            await db.SaveChangesAsync();

            return Ok(nomPositions);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NomPositionsExists(int id)
        {
            return db.NomPositions.Count(e => e.Id == id) > 0;
        }
    }
}