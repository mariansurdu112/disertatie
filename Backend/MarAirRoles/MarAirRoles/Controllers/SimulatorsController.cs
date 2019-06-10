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
    public class SimulatorsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Simulators
        public IQueryable<Simulator> GetSimulator()
        {
            return db.Simulator;
        }

        // GET: api/Simulators/5
        [ResponseType(typeof(Simulator))]
        public async Task<IHttpActionResult> GetSimulator(int id)
        {
            Simulator simulator = await db.Simulator.FindAsync(id);
            if (simulator == null)
            {
                return NotFound();
            }

            return Ok(simulator);
        }

        // PUT: api/Simulators/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSimulator(int id, Simulator simulator)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != simulator.Id)
            {
                return BadRequest();
            }

            db.Entry(simulator).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SimulatorExists(id))
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

        // POST: api/Simulators
        [ResponseType(typeof(Simulator))]
        public async Task<IHttpActionResult> PostSimulator(Simulator simulator)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Simulator.Add(simulator);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = simulator.Id }, simulator);
        }

        // DELETE: api/Simulators/5
        [ResponseType(typeof(Simulator))]
        public async Task<IHttpActionResult> DeleteSimulator(int id)
        {
            Simulator simulator = await db.Simulator.FindAsync(id);
            if (simulator == null)
            {
                return NotFound();
            }

            db.Simulator.Remove(simulator);
            await db.SaveChangesAsync();

            return Ok(simulator);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SimulatorExists(int id)
        {
            return db.Simulator.Count(e => e.Id == id) > 0;
        }
    }
}