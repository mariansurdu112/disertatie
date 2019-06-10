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
    public class RequestOffsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/RequestOffs
        public IQueryable<RequestOff> GetRequestsOff()
        {
            return db.RequestsOff;
        }

        // GET: api/RequestOffs/5
        [ResponseType(typeof(RequestOff))]
        public async Task<IHttpActionResult> GetRequestOff(int id)
        {
            RequestOff requestOff = await db.RequestsOff.FindAsync(id);
            if (requestOff == null)
            {
                return NotFound();
            }

            return Ok(requestOff);
        }

        // PUT: api/RequestOffs/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutRequestOff(int id, RequestOff requestOff)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != requestOff.Id)
            {
                return BadRequest();
            }

            db.Entry(requestOff).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RequestOffExists(id))
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

        // POST: api/RequestOffs
        [ResponseType(typeof(RequestOff))]
        public async Task<IHttpActionResult> PostRequestOff(RequestOff requestOff)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.RequestsOff.Add(requestOff);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = requestOff.Id }, requestOff);
        }

        // DELETE: api/RequestOffs/5
        [ResponseType(typeof(RequestOff))]
        public async Task<IHttpActionResult> DeleteRequestOff(int id)
        {
            RequestOff requestOff = await db.RequestsOff.FindAsync(id);
            if (requestOff == null)
            {
                return NotFound();
            }

            db.RequestsOff.Remove(requestOff);
            await db.SaveChangesAsync();

            return Ok(requestOff);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RequestOffExists(int id)
        {
            return db.RequestsOff.Count(e => e.Id == id) > 0;
        }
    }
}