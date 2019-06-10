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
    public class NomCoursesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/NomCourses
        public IQueryable<NomCourses> GetNomCourses()
        {
            return db.NomCourses;
        }

        // GET: api/NomCourses/5
        [ResponseType(typeof(NomCourses))]
        public async Task<IHttpActionResult> GetNomCourses(int id)
        {
            NomCourses nomCourses = await db.NomCourses.FindAsync(id);
            if (nomCourses == null)
            {
                return NotFound();
            }

            return Ok(nomCourses);
        }

        // PUT: api/NomCourses/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutNomCourses(int id, NomCourses nomCourses)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nomCourses.Id)
            {
                return BadRequest();
            }

            db.Entry(nomCourses).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NomCoursesExists(id))
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

        // POST: api/NomCourses
        [ResponseType(typeof(NomCourses))]
        public async Task<IHttpActionResult> PostNomCourses(NomCourses nomCourses)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.NomCourses.Add(nomCourses);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = nomCourses.Id }, nomCourses);
        }

        // DELETE: api/NomCourses/5
        [ResponseType(typeof(NomCourses))]
        public async Task<IHttpActionResult> DeleteNomCourses(int id)
        {
            NomCourses nomCourses = await db.NomCourses.FindAsync(id);
            if (nomCourses == null)
            {
                return NotFound();
            }

            db.NomCourses.Remove(nomCourses);
            await db.SaveChangesAsync();

            return Ok(nomCourses);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NomCoursesExists(int id)
        {
            return db.NomCourses.Count(e => e.Id == id) > 0;
        }
    }
}