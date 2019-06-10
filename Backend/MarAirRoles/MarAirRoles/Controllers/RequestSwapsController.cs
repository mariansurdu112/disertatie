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
    public class RequestSwapsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/RequestSwaps
        public IQueryable<RequestSwap> GetRequestsSwap()
        {
            return db.RequestsSwap;
        }

        // GET: api/RequestSwaps/5
        [ResponseType(typeof(RequestSwap))]
        public async Task<IHttpActionResult> GetRequestSwap(int id)
        {
            RequestSwap requestSwap = await db.RequestsSwap.FindAsync(id);
            if (requestSwap == null)
            {
                return NotFound();
            }

            return Ok(requestSwap);
        }

        // PUT: api/RequestSwaps/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutRequestSwap(int id, RequestSwap requestSwap)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != requestSwap.Id)
            {
                return BadRequest();
            }

            db.Entry(requestSwap).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RequestSwapExists(id))
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

        // POST: api/RequestSwaps
        [ResponseType(typeof(RequestSwap))]
        public async Task<IHttpActionResult> PostRequestSwap(RequestSwap requestSwap)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.RequestsSwap.Add(requestSwap);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = requestSwap.Id }, requestSwap);
        }

        // DELETE: api/RequestSwaps/5
        [ResponseType(typeof(RequestSwap))]
        public async Task<IHttpActionResult> DeleteRequestSwap(int id)
        {
            RequestSwap requestSwap = await db.RequestsSwap.FindAsync(id);
            if (requestSwap == null)
            {
                return NotFound();
            }

            db.RequestsSwap.Remove(requestSwap);
            await db.SaveChangesAsync();

            return Ok(requestSwap);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RequestSwapExists(int id)
        {
            return db.RequestsSwap.Count(e => e.Id == id) > 0;
        }
    }
}