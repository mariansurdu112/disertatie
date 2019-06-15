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
    public class PartNumbersController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/PartNumbers
        public IQueryable<PartNumbers> GetPartNumbers()
        {
            return db.PartNumbers;
        }

        // GET: api/PartNumbers/5
        [ResponseType(typeof(PartNumbers))]
        public async Task<IHttpActionResult> GetPartNumbers(int id)
        {
            PartNumbers partNumbers = await db.PartNumbers.FindAsync(id);
            if (partNumbers == null)
            {
                return NotFound();
            }

            return Ok(partNumbers);
        }

        // PUT: api/PartNumbers/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPartNumbers(int id, PartNumbers partNumbers)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != partNumbers.Id)
            {
                return BadRequest();
            }

            db.Entry(partNumbers).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PartNumbersExists(id))
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

        // POST: api/PartNumbers
        [ResponseType(typeof(PartNumbers))]
        public async Task<IHttpActionResult> PostPartNumbers(PartNumbers partNumbers)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PartNumbers.Add(partNumbers);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = partNumbers.Id }, partNumbers);
        }

        // DELETE: api/PartNumbers/5
        [ResponseType(typeof(PartNumbers))]
        public async Task<IHttpActionResult> DeletePartNumbers(int id)
        {
            PartNumbers partNumbers = await db.PartNumbers.FindAsync(id);
            if (partNumbers == null)
            {
                return NotFound();
            }

            db.PartNumbers.Remove(partNumbers);
            await db.SaveChangesAsync();

            return Ok(partNumbers);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PartNumbersExists(int id)
        {
            return db.PartNumbers.Count(e => e.Id == id) > 0;
        }
    }
}