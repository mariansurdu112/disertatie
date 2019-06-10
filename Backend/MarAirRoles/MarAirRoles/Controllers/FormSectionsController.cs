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
    public class FormSectionsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/FormSections
        public IQueryable<FormSections> GetFormSections()
        {
            return db.FormSections;
        }

        // GET: api/FormSections/5
        [ResponseType(typeof(FormSections))]
        public async Task<IHttpActionResult> GetFormSections(int id)
        {
            FormSections formSections = await db.FormSections.FindAsync(id);
            if (formSections == null)
            {
                return NotFound();
            }

            return Ok(formSections);
        }

        // PUT: api/FormSections/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutFormSections(int id, FormSections formSections)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != formSections.Id)
            {
                return BadRequest();
            }

            db.Entry(formSections).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FormSectionsExists(id))
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

        // POST: api/FormSections
        [ResponseType(typeof(FormSections))]
        public async Task<IHttpActionResult> PostFormSections(FormSections formSections)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.FormSections.Add(formSections);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = formSections.Id }, formSections);
        }

        // DELETE: api/FormSections/5
        [ResponseType(typeof(FormSections))]
        public async Task<IHttpActionResult> DeleteFormSections(int id)
        {
            FormSections formSections = await db.FormSections.FindAsync(id);
            if (formSections == null)
            {
                return NotFound();
            }

            db.FormSections.Remove(formSections);
            await db.SaveChangesAsync();

            return Ok(formSections);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FormSectionsExists(int id)
        {
            return db.FormSections.Count(e => e.Id == id) > 0;
        }
    }
}