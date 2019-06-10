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
    public class CabinRulesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/CabinRules
        public IQueryable<CabinRules> GetCabinRules()
        {
            return db.CabinRules;
        }

        // GET: api/CabinRules/5
        [ResponseType(typeof(CabinRules))]
        public async Task<IHttpActionResult> GetCabinRules(int id)
        {
            CabinRules cabinRules = await db.CabinRules.FindAsync(id);
            if (cabinRules == null)
            {
                return NotFound();
            }

            return Ok(cabinRules);
        }

        // PUT: api/CabinRules/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCabinRules(int id, CabinRules cabinRules)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cabinRules.Id)
            {
                return BadRequest();
            }

            db.Entry(cabinRules).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CabinRulesExists(id))
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

        // POST: api/CabinRules
        [ResponseType(typeof(CabinRules))]
        public async Task<IHttpActionResult> PostCabinRules(CabinRules cabinRules)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CabinRules.Add(cabinRules);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = cabinRules.Id }, cabinRules);
        }

        // DELETE: api/CabinRules/5
        [ResponseType(typeof(CabinRules))]
        public async Task<IHttpActionResult> DeleteCabinRules(int id)
        {
            CabinRules cabinRules = await db.CabinRules.FindAsync(id);
            if (cabinRules == null)
            {
                return NotFound();
            }

            db.CabinRules.Remove(cabinRules);
            await db.SaveChangesAsync();

            return Ok(cabinRules);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CabinRulesExists(int id)
        {
            return db.CabinRules.Count(e => e.Id == id) > 0;
        }
    }
}