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
    public class LeavesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Leaves
        public IQueryable<Leaves> GetLeaves()
        {
            return db.Leaves;
        }

        // GET: api/Leaves/5
        [ResponseType(typeof(Leaves))]
        public async Task<IHttpActionResult> GetLeaves(int id)
        {
            Leaves leaves = await db.Leaves.FindAsync(id);
            if (leaves == null)
            {
                return NotFound();
            }

            return Ok(leaves);
        }

        // PUT: api/Leaves/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutLeaves(int id, Leaves leaves)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != leaves.Id)
            {
                return BadRequest();
            }

            db.Entry(leaves).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LeavesExists(id))
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

        // POST: api/Leaves
        [ResponseType(typeof(Leaves))]
        public async Task<IHttpActionResult> PostLeaves(Leaves leaves)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Leaves.Add(leaves);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = leaves.Id }, leaves);
        }

        // DELETE: api/Leaves/5
        [ResponseType(typeof(Leaves))]
        public async Task<IHttpActionResult> DeleteLeaves(int id)
        {
            Leaves leaves = await db.Leaves.FindAsync(id);
            if (leaves == null)
            {
                return NotFound();
            }

            db.Leaves.Remove(leaves);
            await db.SaveChangesAsync();

            return Ok(leaves);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LeavesExists(int id)
        {
            return db.Leaves.Count(e => e.Id == id) > 0;
        }
    }
}