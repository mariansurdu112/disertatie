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
    public class RequestStaffsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/RequestStaffs
        public IQueryable<RequestStaff> GetRequestsStaff()
        {
            return db.RequestsStaff;
        }

        // GET: api/RequestStaffs/5
        [ResponseType(typeof(RequestStaff))]
        public async Task<IHttpActionResult> GetRequestStaff(int id)
        {
            RequestStaff requestStaff = await db.RequestsStaff.FindAsync(id);
            if (requestStaff == null)
            {
                return NotFound();
            }

            return Ok(requestStaff);
        }

        // PUT: api/RequestStaffs/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutRequestStaff(int id, RequestStaff requestStaff)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != requestStaff.Id)
            {
                return BadRequest();
            }

            db.Entry(requestStaff).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RequestStaffExists(id))
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

        // POST: api/RequestStaffs
        [ResponseType(typeof(RequestStaff))]
        public async Task<IHttpActionResult> PostRequestStaff(RequestStaff requestStaff)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.RequestsStaff.Add(requestStaff);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = requestStaff.Id }, requestStaff);
        }

        // DELETE: api/RequestStaffs/5
        [ResponseType(typeof(RequestStaff))]
        public async Task<IHttpActionResult> DeleteRequestStaff(int id)
        {
            RequestStaff requestStaff = await db.RequestsStaff.FindAsync(id);
            if (requestStaff == null)
            {
                return NotFound();
            }

            db.RequestsStaff.Remove(requestStaff);
            await db.SaveChangesAsync();

            return Ok(requestStaff);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RequestStaffExists(int id)
        {
            return db.RequestsStaff.Count(e => e.Id == id) > 0;
        }
    }
}