using MarAirV2.Controllers;
using MarAirV2.Factory;
using MarAirV2.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.Security;
using MarAirV2;
using Microsoft.AspNet.Identity.Owin;

[Authorize(Roles = "Admin")]
[RoutePrefix("api/roles")]
public class RolesController : BaseApiController
{


    [Authorize(Roles = "Admin")]
    [Route("changerole/{id:guid}", Name = "ChangeRole")]
    [HttpGet]
    public async Task<IHttpActionResult> ChangeRole(string id)
    {
        try
        {
            var userManager = Request.GetOwinContext().Get<ApplicationUserManager>();
            var role = await this.AppRoleManager.FindByIdAsync(id);
            var idx = User.Identity.Name.ToString();
            if (idx != null) await userManager.AddToRolesAsync(idx.ToString(), role.Name);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }


    [Route("{id:guid}", Name = "GetRoleById")]
    public async Task<IHttpActionResult> GetRole(string Id)
    {
        var role = await this.AppRoleManager.FindByIdAsync(Id);

        if (role != null)
        {
            return Ok();
        }

        return NotFound();

    }
    [Authorize(Roles = "Admin")]
    [Route("x", Name = "GetAllRoles")]
    public IHttpActionResult GetAllRoles()
    {
        var roles = this.AppRoleManager.Roles;
        var id = User.Identity.GetUserId();
        return Ok(roles.Select(p=>new {p.Id,p.Name}));
    }

    [Route("create")]
    public async Task<IHttpActionResult> Create(CreateRoleBindingModel model)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var role = new IdentityRole { Name = model.Name };

        var result = await this.AppRoleManager.CreateAsync(role);

        if (!result.Succeeded)
        {
            return GetErrorResult(result);
        }

        Uri locationHeader = new Uri(Url.Link("GetRoleById", new { id = role.Id }));

        return Created(locationHeader, TheModelFactory.Create(role));

    }

    [Route("{id:guid}")]
    public async Task<IHttpActionResult> DeleteRole(string Id)
    {
        
        var role = await this.AppRoleManager.FindByIdAsync(Id);

        if (role != null)
        {
            IdentityResult result = await this.AppRoleManager.DeleteAsync(role);

            if (!result.Succeeded)
            {
                return GetErrorResult(result);
            }

            return Ok();
        }

        return NotFound();

    }

    [Route("ManageUsersInRole")]
    public async Task<IHttpActionResult> ManageUsersInRole(UsersInRoleModel model)
    {
        var role = await this.AppRoleManager.FindByIdAsync(model.Id);

        if (role == null)
        {
            ModelState.AddModelError("", "Role does not exist");
            return BadRequest(ModelState);
        }

        foreach (string user in model.EnrolledUsers)
        {
            var appUser = await this.AppUserManager.FindByIdAsync(user);

            if (appUser == null)
            {
                ModelState.AddModelError("", String.Format("User: {0} does not exists", user));
                continue;
            }

            if (!this.AppUserManager.IsInRole(user, role.Name))
            {
                IdentityResult result = await this.AppUserManager.AddToRoleAsync(user, role.Name);

                if (!result.Succeeded)
                {
                    ModelState.AddModelError("", String.Format("User: {0} could not be added to role", user));
                }

            }
        }

        foreach (string user in model.RemovedUsers)
        {
            var appUser = await this.AppUserManager.FindByIdAsync(user);

            if (appUser == null)
            {
                ModelState.AddModelError("", String.Format("User: {0} does not exists", user));
                continue;
            }

            IdentityResult result = await this.AppUserManager.RemoveFromRoleAsync(user, role.Name);

            if (!result.Succeeded)
            {
                ModelState.AddModelError("", String.Format("User: {0} could not be removed from role", user));
            }
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        return Ok();
    }
}