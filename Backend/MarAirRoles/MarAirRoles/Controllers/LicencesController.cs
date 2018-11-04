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
    public class LicencesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Licences
        public IQueryable<Licences> GetLicenses()
        {
            return db.Licenses;
        }

        // GET: api/Licences/5
        [ResponseType(typeof(Licences))]
        public async Task<IHttpActionResult> GetLicences(int id)
        {
            Licences licences = await db.Licenses.FindAsync(id);
            if (licences == null)
            {
                return NotFound();
            }

            return Ok(licences);
        }

        // PUT: api/Licences/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutLicences(int id, Licences licences)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != licences.Id)
            {
                return BadRequest();
            }

            db.Entry(licences).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LicencesExists(id))
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

        // POST: api/Licences
        [ResponseType(typeof(Licences))]
        public async Task<IHttpActionResult> PostLicences(Licences licences)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Licenses.Add(licences);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = licences.Id }, licences);
        }

        // DELETE: api/Licences/5
        [ResponseType(typeof(Licences))]
        public async Task<IHttpActionResult> DeleteLicences(int id)
        {
            Licences licences = await db.Licenses.FindAsync(id);
            if (licences == null)
            {
                return NotFound();
            }

            db.Licenses.Remove(licences);
            await db.SaveChangesAsync();

            return Ok(licences);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LicencesExists(int id)
        {
            return db.Licenses.Count(e => e.Id == id) > 0;
        }
    }
}