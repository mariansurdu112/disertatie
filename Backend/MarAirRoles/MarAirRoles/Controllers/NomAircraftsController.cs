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
    public class NomAircraftsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/NomAircrafts
        public IQueryable<NomAircrafts> GetNomAircrafts()
        {
            return db.NomAircrafts;
        }

        // GET: api/NomAircrafts/5
        [ResponseType(typeof(NomAircrafts))]
        public async Task<IHttpActionResult> GetNomAircrafts(int id)
        {
            NomAircrafts nomAircrafts = await db.NomAircrafts.FindAsync(id);
            if (nomAircrafts == null)
            {
                return NotFound();
            }

            return Ok(nomAircrafts);
        }

        // PUT: api/NomAircrafts/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutNomAircrafts(int id, NomAircrafts nomAircrafts)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nomAircrafts.Id)
            {
                return BadRequest();
            }

            db.Entry(nomAircrafts).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NomAircraftsExists(id))
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

        // POST: api/NomAircrafts
        [ResponseType(typeof(NomAircrafts))]
        public async Task<IHttpActionResult> PostNomAircrafts(NomAircrafts nomAircrafts)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.NomAircrafts.Add(nomAircrafts);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = nomAircrafts.Id }, nomAircrafts);
        }

        // DELETE: api/NomAircrafts/5
        [ResponseType(typeof(NomAircrafts))]
        public async Task<IHttpActionResult> DeleteNomAircrafts(int id)
        {
            NomAircrafts nomAircrafts = await db.NomAircrafts.FindAsync(id);
            if (nomAircrafts == null)
            {
                return NotFound();
            }

            db.NomAircrafts.Remove(nomAircrafts);
            await db.SaveChangesAsync();

            return Ok(nomAircrafts);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NomAircraftsExists(int id)
        {
            return db.NomAircrafts.Count(e => e.Id == id) > 0;
        }
    }
}