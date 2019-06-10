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
    public class NomDevicesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/NomDevices
        public IQueryable<NomDevice> GetNomDevices()
        {
            return db.NomDevices;
        }

        // GET: api/NomDevices/5
        [ResponseType(typeof(NomDevice))]
        public async Task<IHttpActionResult> GetNomDevice(int id)
        {
            NomDevice nomDevice = await db.NomDevices.FindAsync(id);
            if (nomDevice == null)
            {
                return NotFound();
            }

            return Ok(nomDevice);
        }

        // PUT: api/NomDevices/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutNomDevice(int id, NomDevice nomDevice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nomDevice.Id)
            {
                return BadRequest();
            }

            db.Entry(nomDevice).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NomDeviceExists(id))
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

        // POST: api/NomDevices
        [ResponseType(typeof(NomDevice))]
        public async Task<IHttpActionResult> PostNomDevice(NomDevice nomDevice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.NomDevices.Add(nomDevice);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = nomDevice.Id }, nomDevice);
        }

        // DELETE: api/NomDevices/5
        [ResponseType(typeof(NomDevice))]
        public async Task<IHttpActionResult> DeleteNomDevice(int id)
        {
            NomDevice nomDevice = await db.NomDevices.FindAsync(id);
            if (nomDevice == null)
            {
                return NotFound();
            }

            db.NomDevices.Remove(nomDevice);
            await db.SaveChangesAsync();

            return Ok(nomDevice);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NomDeviceExists(int id)
        {
            return db.NomDevices.Count(e => e.Id == id) > 0;
        }
    }
}