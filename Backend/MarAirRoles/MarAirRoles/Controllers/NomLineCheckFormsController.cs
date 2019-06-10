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
    public class NomLineCheckFormsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/NomLineCheckForms
        public IQueryable<NomLineCheckForms> GetNomLineCheckForms()
        {
            return db.NomLineCheckForms;
        }

        // GET: api/NomLineCheckForms/5
        [ResponseType(typeof(NomLineCheckForms))]
        public async Task<IHttpActionResult> GetNomLineCheckForms(int id)
        {
            NomLineCheckForms nomLineCheckForms = await db.NomLineCheckForms.FindAsync(id);
            if (nomLineCheckForms == null)
            {
                return NotFound();
            }

            return Ok(nomLineCheckForms);
        }

        // PUT: api/NomLineCheckForms/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutNomLineCheckForms(int id, NomLineCheckForms nomLineCheckForms)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nomLineCheckForms.Id)
            {
                return BadRequest();
            }

            db.Entry(nomLineCheckForms).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NomLineCheckFormsExists(id))
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

        // POST: api/NomLineCheckForms
        [ResponseType(typeof(NomLineCheckForms))]
        public async Task<IHttpActionResult> PostNomLineCheckForms(NomLineCheckForms nomLineCheckForms)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.NomLineCheckForms.Add(nomLineCheckForms);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = nomLineCheckForms.Id }, nomLineCheckForms);
        }

        // DELETE: api/NomLineCheckForms/5
        [ResponseType(typeof(NomLineCheckForms))]
        public async Task<IHttpActionResult> DeleteNomLineCheckForms(int id)
        {
            NomLineCheckForms nomLineCheckForms = await db.NomLineCheckForms.FindAsync(id);
            if (nomLineCheckForms == null)
            {
                return NotFound();
            }

            db.NomLineCheckForms.Remove(nomLineCheckForms);
            await db.SaveChangesAsync();

            return Ok(nomLineCheckForms);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NomLineCheckFormsExists(int id)
        {
            return db.NomLineCheckForms.Count(e => e.Id == id) > 0;
        }
    }
}