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
    public class ContractsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Contracts
        public IQueryable<Contracts> GetContracts()
        {
            return db.Contracts;
        }

        // GET: api/Contracts/5
        [ResponseType(typeof(Contracts))]
        public async Task<IHttpActionResult> GetContracts(int id)
        {
            Contracts contracts = await db.Contracts.FindAsync(id);
            if (contracts == null)
            {
                return NotFound();
            }

            return Ok(contracts);
        }

        // PUT: api/Contracts/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutContracts(int id, Contracts contracts)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != contracts.Id)
            {
                return BadRequest();
            }

            db.Entry(contracts).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContractsExists(id))
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

        // POST: api/Contracts
        [ResponseType(typeof(Contracts))]
        public async Task<IHttpActionResult> PostContracts(Contracts contracts)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Contracts.Add(contracts);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = contracts.Id }, contracts);
        }

        // DELETE: api/Contracts/5
        [ResponseType(typeof(Contracts))]
        public async Task<IHttpActionResult> DeleteContracts(int id)
        {
            Contracts contracts = await db.Contracts.FindAsync(id);
            if (contracts == null)
            {
                return NotFound();
            }

            db.Contracts.Remove(contracts);
            await db.SaveChangesAsync();

            return Ok(contracts);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ContractsExists(int id)
        {
            return db.Contracts.Count(e => e.Id == id) > 0;
        }
    }
}