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
    public class NomRulesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/NomRules
        public IQueryable<NomRules> GetNomRules()
        {
            return db.NomRules;
        }

        // GET: api/NomRules/5
        [ResponseType(typeof(NomRules))]
        public async Task<IHttpActionResult> GetNomRules(int id)
        {
            NomRules nomRules = await db.NomRules.FindAsync(id);
            if (nomRules == null)
            {
                return NotFound();
            }

            return Ok(nomRules);
        }

        // PUT: api/NomRules/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutNomRules(int id, NomRules nomRules)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nomRules.Id)
            {
                return BadRequest();
            }

            db.Entry(nomRules).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NomRulesExists(id))
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

        // POST: api/NomRules
        [ResponseType(typeof(NomRules))]
        public async Task<IHttpActionResult> PostNomRules(NomRules nomRules)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.NomRules.Add(nomRules);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = nomRules.Id }, nomRules);
        }

        // DELETE: api/NomRules/5
        [ResponseType(typeof(NomRules))]
        public async Task<IHttpActionResult> DeleteNomRules(int id)
        {
            NomRules nomRules = await db.NomRules.FindAsync(id);
            if (nomRules == null)
            {
                return NotFound();
            }

            db.NomRules.Remove(nomRules);
            await db.SaveChangesAsync();

            return Ok(nomRules);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NomRulesExists(int id)
        {
            return db.NomRules.Count(e => e.Id == id) > 0;
        }
    }
}