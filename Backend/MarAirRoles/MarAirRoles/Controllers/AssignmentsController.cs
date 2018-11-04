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
    public class AssignmentsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Assignments
        public IQueryable<Assignments> GetAssignments()
        {
            return db.Assignments;
        }

        // GET: api/Assignments/5
        [ResponseType(typeof(Assignments))]
        public async Task<IHttpActionResult> GetAssignments(int id)
        {
            Assignments assignments = await db.Assignments.FindAsync(id);
            if (assignments == null)
            {
                return NotFound();
            }

            return Ok(assignments);
        }

        // PUT: api/Assignments/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAssignments(int id, Assignments assignments)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != assignments.Id)
            {
                return BadRequest();
            }

            db.Entry(assignments).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AssignmentsExists(id))
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

        // POST: api/Assignments
        [ResponseType(typeof(Assignments))]
        public async Task<IHttpActionResult> PostAssignments(Assignments assignments)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Assignments.Add(assignments);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = assignments.Id }, assignments);
        }

        // DELETE: api/Assignments/5
        [ResponseType(typeof(Assignments))]
        public async Task<IHttpActionResult> DeleteAssignments(int id)
        {
            Assignments assignments = await db.Assignments.FindAsync(id);
            if (assignments == null)
            {
                return NotFound();
            }

            db.Assignments.Remove(assignments);
            await db.SaveChangesAsync();

            return Ok(assignments);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AssignmentsExists(int id)
        {
            return db.Assignments.Count(e => e.Id == id) > 0;
        }
    }
}