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
    public class GroundCoursesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/GroundCourses
        public IQueryable<GroundCourses> GetGroundCourses()
        {
            return db.GroundCourses;
        }

        // GET: api/GroundCourses/5
        [ResponseType(typeof(GroundCourses))]
        public async Task<IHttpActionResult> GetGroundCourses(int id)
        {
            GroundCourses groundCourses = await db.GroundCourses.FindAsync(id);
            if (groundCourses == null)
            {
                return NotFound();
            }

            return Ok(groundCourses);
        }

        // PUT: api/GroundCourses/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutGroundCourses(int id, GroundCourses groundCourses)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != groundCourses.Id)
            {
                return BadRequest();
            }

            db.Entry(groundCourses).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GroundCoursesExists(id))
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

        // POST: api/GroundCourses
        [ResponseType(typeof(GroundCourses))]
        public async Task<IHttpActionResult> PostGroundCourses(GroundCourses groundCourses)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.GroundCourses.Add(groundCourses);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = groundCourses.Id }, groundCourses);
        }

        // DELETE: api/GroundCourses/5
        [ResponseType(typeof(GroundCourses))]
        public async Task<IHttpActionResult> DeleteGroundCourses(int id)
        {
            GroundCourses groundCourses = await db.GroundCourses.FindAsync(id);
            if (groundCourses == null)
            {
                return NotFound();
            }

            db.GroundCourses.Remove(groundCourses);
            await db.SaveChangesAsync();

            return Ok(groundCourses);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GroundCoursesExists(int id)
        {
            return db.GroundCourses.Count(e => e.Id == id) > 0;
        }
    }
}