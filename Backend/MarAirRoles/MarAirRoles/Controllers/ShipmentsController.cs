﻿using System;
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
        public IQueryable<Shipments> GetShipments()
        {
            return db.Shipments;
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
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Shipments.Add(shipments);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = shipments.Id }, shipments);
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
}