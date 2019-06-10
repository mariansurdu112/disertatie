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
    public class FlightFormsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/FlightForms
        public IQueryable<FlightForm> GetFlightForm()
        {
            return db.FlightForm;
        }

        // GET: api/FlightForms/5
        [ResponseType(typeof(FlightForm))]
        public async Task<IHttpActionResult> GetFlightForm(int id)
        {
            FlightForm flightForm = await db.FlightForm.FindAsync(id);
            if (flightForm == null)
            {
                return NotFound();
            }

            return Ok(flightForm);
        }

        // PUT: api/FlightForms/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutFlightForm(int id, FlightForm flightForm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != flightForm.Id)
            {
                return BadRequest();
            }

            db.Entry(flightForm).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FlightFormExists(id))
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

        // POST: api/FlightForms
        [ResponseType(typeof(FlightForm))]
        public async Task<IHttpActionResult> PostFlightForm(FlightForm flightForm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.FlightForm.Add(flightForm);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = flightForm.Id }, flightForm);
        }

        // DELETE: api/FlightForms/5
        [ResponseType(typeof(FlightForm))]
        public async Task<IHttpActionResult> DeleteFlightForm(int id)
        {
            FlightForm flightForm = await db.FlightForm.FindAsync(id);
            if (flightForm == null)
            {
                return NotFound();
            }

            db.FlightForm.Remove(flightForm);
            await db.SaveChangesAsync();

            return Ok(flightForm);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FlightFormExists(int id)
        {
            return db.FlightForm.Count(e => e.Id == id) > 0;
        }
    }
}