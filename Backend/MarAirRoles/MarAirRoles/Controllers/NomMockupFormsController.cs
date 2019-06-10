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
    public class NomMockupFormsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/NomMockupForms
        public IQueryable<NomMockupForms> GetNomMockupForms()
        {
            return db.NomMockupForms;
        }

        // GET: api/NomMockupForms/5
        [ResponseType(typeof(NomMockupForms))]
        public async Task<IHttpActionResult> GetNomMockupForms(int id)
        {
            NomMockupForms nomMockupForms = await db.NomMockupForms.FindAsync(id);
            if (nomMockupForms == null)
            {
                return NotFound();
            }

            return Ok(nomMockupForms);
        }

        // PUT: api/NomMockupForms/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutNomMockupForms(int id, NomMockupForms nomMockupForms)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nomMockupForms.Id)
            {
                return BadRequest();
            }

            db.Entry(nomMockupForms).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NomMockupFormsExists(id))
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

        // POST: api/NomMockupForms
        [ResponseType(typeof(NomMockupForms))]
        public async Task<IHttpActionResult> PostNomMockupForms(NomMockupForms nomMockupForms)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.NomMockupForms.Add(nomMockupForms);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = nomMockupForms.Id }, nomMockupForms);
        }

        // DELETE: api/NomMockupForms/5
        [ResponseType(typeof(NomMockupForms))]
        public async Task<IHttpActionResult> DeleteNomMockupForms(int id)
        {
            NomMockupForms nomMockupForms = await db.NomMockupForms.FindAsync(id);
            if (nomMockupForms == null)
            {
                return NotFound();
            }

            db.NomMockupForms.Remove(nomMockupForms);
            await db.SaveChangesAsync();

            return Ok(nomMockupForms);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NomMockupFormsExists(int id)
        {
            return db.NomMockupForms.Count(e => e.Id == id) > 0;
        }
    }
}