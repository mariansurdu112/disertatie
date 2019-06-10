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
    public class LineChecksController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/LineChecks
        public IQueryable<LineCheck> GetLineCheck()
        {
            return db.LineCheck;
        }

        // GET: api/LineChecks/5
        [ResponseType(typeof(LineCheck))]
        public async Task<IHttpActionResult> GetLineCheck(int id)
        {
            LineCheck lineCheck = await db.LineCheck.FindAsync(id);
            if (lineCheck == null)
            {
                return NotFound();
            }

            return Ok(lineCheck);
        }

        // PUT: api/LineChecks/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutLineCheck(int id, LineCheck lineCheck)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != lineCheck.Id)
            {
                return BadRequest();
            }

            db.Entry(lineCheck).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LineCheckExists(id))
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

        // POST: api/LineChecks
        [ResponseType(typeof(LineCheck))]
        public async Task<IHttpActionResult> PostLineCheck(LineCheck lineCheck)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.LineCheck.Add(lineCheck);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = lineCheck.Id }, lineCheck);
        }

        // DELETE: api/LineChecks/5
        [ResponseType(typeof(LineCheck))]
        public async Task<IHttpActionResult> DeleteLineCheck(int id)
        {
            LineCheck lineCheck = await db.LineCheck.FindAsync(id);
            if (lineCheck == null)
            {
                return NotFound();
            }

            db.LineCheck.Remove(lineCheck);
            await db.SaveChangesAsync();

            return Ok(lineCheck);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LineCheckExists(int id)
        {
            return db.LineCheck.Count(e => e.Id == id) > 0;
        }
    }
}