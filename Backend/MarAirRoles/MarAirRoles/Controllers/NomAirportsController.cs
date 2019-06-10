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
    public class NomAirportsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/NomAirports
        public IQueryable<NomAirports> GetNomAirports()
        {
            return db.NomAirports;
        }

        // GET: api/NomAirports/5
        [ResponseType(typeof(NomAirports))]
        public async Task<IHttpActionResult> GetNomAirports(int id)
        {
            NomAirports nomAirports = await db.NomAirports.FindAsync(id);
            if (nomAirports == null)
            {
                return NotFound();
            }

            return Ok(nomAirports);
        }

        // PUT: api/NomAirports/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutNomAirports(int id, NomAirports nomAirports)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nomAirports.Id)
            {
                return BadRequest();
            }

            db.Entry(nomAirports).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NomAirportsExists(id))
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

        // POST: api/NomAirports
        [ResponseType(typeof(NomAirports))]
        public async Task<IHttpActionResult> PostNomAirports(NomAirports nomAirports)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.NomAirports.Add(nomAirports);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = nomAirports.Id }, nomAirports);
        }

        // DELETE: api/NomAirports/5
        [ResponseType(typeof(NomAirports))]
        public async Task<IHttpActionResult> DeleteNomAirports(int id)
        {
            NomAirports nomAirports = await db.NomAirports.FindAsync(id);
            if (nomAirports == null)
            {
                return NotFound();
            }

            db.NomAirports.Remove(nomAirports);
            await db.SaveChangesAsync();

            return Ok(nomAirports);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NomAirportsExists(int id)
        {
            return db.NomAirports.Count(e => e.Id == id) > 0;
        }
    }
}