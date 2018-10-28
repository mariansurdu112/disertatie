using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace MarAirAdmin.Controllers
{
    [Authorize(Roles = "Admin")]
    [RoutePrefix("api/roles")]
    public class RolesController : BaseApiController
    {
        [Route("{id:int}", Name = "GetRoleById")]
        public async Task<IHttpActionResult> GetRole(int Id)
        {
            var role = await this.AppRoleManager.FindByIdAsync(Id);

            if (role != null)
            {
                return Ok(role);
            }

            return NotFound();

        }
        [Route("", Name = "GetAllRoles")]
        public IHttpActionResult GetAllRoles()
        {
            var roles = this.AppRoleManager.Roles;

            return Ok(roles);
        }

        

    }
}
