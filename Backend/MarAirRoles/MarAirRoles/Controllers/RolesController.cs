using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using MarAirRoles.Helpers;
using MarAirRoles.RequestModels;
using Microsoft.AspNet.Identity.Owin;

namespace MarAirRoles.Controllers
{
    [Authorize(Roles = "Admin")]
    public class RolesController : ApiController
    {
       
        [Route("api/changerole")]
        [HttpPost]
        public async Task<IHttpActionResult> ChangeRole(RoleChange model)
        {
            try
            {
                var userManager = Request.GetOwinContext().Get<ApplicationUserManager>();
                await userManager.AddToRolesAsync(model.UserId, model.Role);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("api/getroles")]
        [HttpGet]
        public IHttpActionResult GetRoles()
        {
            try
            {
                var roleManager = Request.GetOwinContext().Get<ApplicationRoleManager>();
                var dataRoles = roleManager.Roles.Select(p => new { p.Id, p.Name }).ToList();
                return Ok(dataRoles);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
