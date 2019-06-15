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
    public class ShipmentsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();




        // GET: api/Shipments
        public List<Shipments> GetShipments()
        {
            try
            {
                return db.Shipments.ToList();
            }
            catch (Exception)
            {

                throw;
            }
            
        }

        // GET: api/Shipments/5
        [ResponseType(typeof(Shipments))]
        public async Task<IHttpActionResult> GetShipments(int id)
        {
            Shipments shipments = await db.Shipments.FindAsync(id);
            if (shipments == null)
            {
                return NotFound();
            }

            return Ok(shipments);
        }

        // PUT: api/Shipments/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutShipments(int id, Shipments shipments)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != shipments.Id)
            {
                return BadRequest();
            }

            db.Entry(shipments).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShipmentsExists(id))
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

        // POST: api/Shipments
        [ResponseType(typeof(Shipments))]
        public async Task<IHttpActionResult> PostShipments(Shipments shipments)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                db.Shipments.Add(shipments);
                await db.SaveChangesAsync();

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
           
        }


        [Route("api/critical")]
        [HttpPost]
        public IHttpActionResult Critical(OrderMarks model)
        {
            var order = db.Shipments.Find(model.Id);
            order.Critical = model.Value;
            db.SaveChanges();
            return Ok();
        }

        [Route("api/acktech")]
        [HttpPost]
        public IHttpActionResult AckTech(OrderMarks model)
        {
            var order = db.Shipments.Find(model.Id);
            order.TechnicAck = model.Value;
            db.SaveChanges();
            return Ok();
        }

        [Route("api/acklog")]
        [HttpPost]
        public IHttpActionResult AckLog(OrderMarks model)
        {
            var order = db.Shipments.Find(model.Id);
            order.LogisticAck = model.Value;
            db.SaveChanges();
            return Ok();
        }

        // DELETE: api/Shipments/5
        [ResponseType(typeof(Shipments))]
        public async Task<IHttpActionResult> DeleteShipments(int id)
        {
            Shipments shipments = await db.Shipments.FindAsync(id);
            if (shipments == null)
            {
                return NotFound();
            }

            db.Shipments.Remove(shipments);
            await db.SaveChangesAsync();

            return Ok(shipments);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ShipmentsExists(int id)
        {
            return db.Shipments.Count(e => e.Id == id) > 0;
        }
    }

    public class OrderMarks
    {
        public int Id { get; set; }
        public bool Value { get; set; }
    }
}