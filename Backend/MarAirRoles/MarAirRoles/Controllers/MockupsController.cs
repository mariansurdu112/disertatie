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
    public class MockupsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Mockups
        public IQueryable<Mockup> GetMockup()
        {
            return db.Mockup;
        }

        // GET: api/Mockups/5
        [ResponseType(typeof(Mockup))]
        public async Task<IHttpActionResult> GetMockup(int id)
        {
            Mockup mockup = await db.Mockup.FindAsync(id);
            if (mockup == null)
            {
                return NotFound();
            }

            return Ok(mockup);
        }

        // PUT: api/Mockups/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutMockup(int id, Mockup mockup)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != mockup.Id)
            {
                return BadRequest();
            }

            db.Entry(mockup).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MockupExists(id))
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

        // POST: api/Mockups
        [ResponseType(typeof(Mockup))]
        public async Task<IHttpActionResult> PostMockup(Mockup mockup)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Mockup.Add(mockup);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = mockup.Id }, mockup);
        }

        // DELETE: api/Mockups/5
        [ResponseType(typeof(Mockup))]
        public async Task<IHttpActionResult> DeleteMockup(int id)
        {
            Mockup mockup = await db.Mockup.FindAsync(id);
            if (mockup == null)
            {
                return NotFound();
            }

            db.Mockup.Remove(mockup);
            await db.SaveChangesAsync();

            return Ok(mockup);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MockupExists(int id)
        {
            return db.Mockup.Count(e => e.Id == id) > 0;
        }
    }
}