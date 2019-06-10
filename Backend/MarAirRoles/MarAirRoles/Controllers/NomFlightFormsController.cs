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
    public class NomFlightFormsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/NomFlightForms
        public IQueryable<NomFlightForms> GetNomFlightForms()
        {
            return db.NomFlightForms;
        }

        // GET: api/NomFlightForms/5
        [ResponseType(typeof(NomFlightForms))]
        public async Task<IHttpActionResult> GetNomFlightForms(int id)
        {
            NomFlightForms nomFlightForms = await db.NomFlightForms.FindAsync(id);
            if (nomFlightForms == null)
            {
                return NotFound();
            }

            return Ok(nomFlightForms);
        }

        // PUT: api/NomFlightForms/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutNomFlightForms(int id, NomFlightForms nomFlightForms)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nomFlightForms.Id)
            {
                return BadRequest();
            }

            db.Entry(nomFlightForms).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NomFlightFormsExists(id))
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

        // POST: api/NomFlightForms
        [ResponseType(typeof(NomFlightForms))]
        public async Task<IHttpActionResult> PostNomFlightForms(NomFlightForms nomFlightForms)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.NomFlightForms.Add(nomFlightForms);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = nomFlightForms.Id }, nomFlightForms);
        }

        // DELETE: api/NomFlightForms/5
        [ResponseType(typeof(NomFlightForms))]
        public async Task<IHttpActionResult> DeleteNomFlightForms(int id)
        {
            NomFlightForms nomFlightForms = await db.NomFlightForms.FindAsync(id);
            if (nomFlightForms == null)
            {
                return NotFound();
            }

            db.NomFlightForms.Remove(nomFlightForms);
            await db.SaveChangesAsync();

            return Ok(nomFlightForms);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NomFlightFormsExists(int id)
        {
            return db.NomFlightForms.Count(e => e.Id == id) > 0;
        }
    }
}