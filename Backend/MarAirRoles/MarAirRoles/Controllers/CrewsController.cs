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
    public class CrewsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Crews
        public IQueryable<Crews> GetCrews()
        {
            return db.Crews;
        }

        // GET: api/Crews/5
        [ResponseType(typeof(Crews))]
        public async Task<IHttpActionResult> GetCrews(int id)
        {
            Crews crews = await db.Crews.FindAsync(id);
            if (crews == null)
            {
                return NotFound();
            }

            return Ok(crews);
        }

        // PUT: api/Crews/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCrews(int id, Crews crews)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != crews.Id)
            {
                return BadRequest();
            }

            db.Entry(crews).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CrewsExists(id))
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

        // POST: api/Crews
        [ResponseType(typeof(Crews))]
        public async Task<IHttpActionResult> PostCrews(Crews crews)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Crews.Add(crews);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = crews.Id }, crews);
        }

        // DELETE: api/Crews/5
        [ResponseType(typeof(Crews))]
        public async Task<IHttpActionResult> DeleteCrews(int id)
        {
            Crews crews = await db.Crews.FindAsync(id);
            if (crews == null)
            {
                return NotFound();
            }

            db.Crews.Remove(crews);
            await db.SaveChangesAsync();

            return Ok(crews);
        }

        [AllowAnonymous]
        [Route("api/getcrewsbyposition")]
        [HttpGet]
        public IHttpActionResult GetCrewsByPosition()
        {
            try
            {

                
                return Ok();
                
            }
            catch (Exception)
            {

                return BadRequest();
            }
            
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CrewsExists(int id)
        {
            return db.Crews.Count(e => e.Id == id) > 0;
        }
    }
}