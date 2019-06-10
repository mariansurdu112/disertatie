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
    public class CourseSectionsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/CourseSections
        public IQueryable<CourseSections> GetCourseSections()
        {
            return db.CourseSections;
        }

        // GET: api/CourseSections/5
        [ResponseType(typeof(CourseSections))]
        public async Task<IHttpActionResult> GetCourseSections(int id)
        {
            CourseSections courseSections = await db.CourseSections.FindAsync(id);
            if (courseSections == null)
            {
                return NotFound();
            }

            return Ok(courseSections);
        }

        // PUT: api/CourseSections/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCourseSections(int id, CourseSections courseSections)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != courseSections.Id)
            {
                return BadRequest();
            }

            db.Entry(courseSections).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseSectionsExists(id))
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

        // POST: api/CourseSections
        [ResponseType(typeof(CourseSections))]
        public async Task<IHttpActionResult> PostCourseSections(CourseSections courseSections)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CourseSections.Add(courseSections);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = courseSections.Id }, courseSections);
        }

        // DELETE: api/CourseSections/5
        [ResponseType(typeof(CourseSections))]
        public async Task<IHttpActionResult> DeleteCourseSections(int id)
        {
            CourseSections courseSections = await db.CourseSections.FindAsync(id);
            if (courseSections == null)
            {
                return NotFound();
            }

            db.CourseSections.Remove(courseSections);
            await db.SaveChangesAsync();

            return Ok(courseSections);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CourseSectionsExists(int id)
        {
            return db.CourseSections.Count(e => e.Id == id) > 0;
        }
    }
}