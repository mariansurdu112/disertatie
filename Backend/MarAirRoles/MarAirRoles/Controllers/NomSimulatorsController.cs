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
    public class NomSimulatorsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/NomSimulators
        public IQueryable<NomSimulator> GetNomSimulators()
        {
            return db.NomSimulators;
        }

        // GET: api/NomSimulators/5
        [ResponseType(typeof(NomSimulator))]
        public async Task<IHttpActionResult> GetNomSimulator(int id)
        {
            NomSimulator nomSimulator = await db.NomSimulators.FindAsync(id);
            if (nomSimulator == null)
            {
                return NotFound();
            }

            return Ok(nomSimulator);
        }

        // PUT: api/NomSimulators/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutNomSimulator(int id, NomSimulator nomSimulator)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nomSimulator.Id)
            {
                return BadRequest();
            }

            db.Entry(nomSimulator).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NomSimulatorExists(id))
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

        // POST: api/NomSimulators
        [ResponseType(typeof(NomSimulator))]
        public async Task<IHttpActionResult> PostNomSimulator(NomSimulator nomSimulator)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.NomSimulators.Add(nomSimulator);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = nomSimulator.Id }, nomSimulator);
        }

        // DELETE: api/NomSimulators/5
        [ResponseType(typeof(NomSimulator))]
        public async Task<IHttpActionResult> DeleteNomSimulator(int id)
        {
            NomSimulator nomSimulator = await db.NomSimulators.FindAsync(id);
            if (nomSimulator == null)
            {
                return NotFound();
            }

            db.NomSimulators.Remove(nomSimulator);
            await db.SaveChangesAsync();

            return Ok(nomSimulator);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NomSimulatorExists(int id)
        {
            return db.NomSimulators.Count(e => e.Id == id) > 0;
        }
    }
}