using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Security;
using MarAirRoles.Helpers;
using MarAirRoles.Models;
using MarAirRoles.Providers;
using MarAirRoles.RequestModels;
using Microsoft.AspNet.Identity.Owin;
using ArgumentNullException = System.ArgumentNullException;
using Microsoft.AspNet.Identity;

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

        public string PasswordChecker(string Password)
        {
            List<int> nonSelectedIndexes = new List<int>(Enumerable.Range(0, Password.Length));
            Random rand = new Random();

            if (!Password.Any(x => char.IsDigit(x)))
            { //does not contain digit
                char[] pass = Password.ToCharArray();
                int pos = nonSelectedIndexes[rand.Next(nonSelectedIndexes.Count)];
                nonSelectedIndexes.Remove(pos);
                pass[pos] = Convert.ToChar(rand.Next(10) + '0');
                Password = new string(pass);
            }

            if (!Password.Any(x => char.IsLower(x)))
            { //does not contain lower
                char[] pass = Password.ToCharArray();
                int pos = nonSelectedIndexes[rand.Next(nonSelectedIndexes.Count)];
                nonSelectedIndexes.Remove(pos);
                pass[pos] = Convert.ToChar(rand.Next(26) + 'a');
                Password = new string(pass);
            }

            if (!Password.Any(x => char.IsUpper(x)))
            { //does not contain upper
                char[] pass = Password.ToCharArray();
                int pos = nonSelectedIndexes[rand.Next(nonSelectedIndexes.Count)];
                nonSelectedIndexes.Remove(pos);
                pass[pos] = Convert.ToChar(rand.Next(26) + 'A');
                Password = new string(pass);
            }

            return Password;
        }

        [Route("api/usercreate")]
        [HttpPost]
        public IHttpActionResult UserCreate(AdminUser model)
        {
            try
            {
                var userManager = Request.GetOwinContext().Get<ApplicationUserManager>();
                var user = new ApplicationUser()
                {
                    UserName = model.Username,
                    Email = model.Email,
                    EmailConfirmed = true,
                };
            //adad
                var passwd = Membership.GeneratePassword(10, 5);
                string newPassword = PasswordChecker(passwd);
              
               
                var result = userManager.Create(user, newPassword);
                if (result.Succeeded)
                {
                   var userid = user.Id;
                    userManager.AddToRole(userid, model.Role);
                    EmailProvider eml = new EmailProvider();
                    EmailModel modelEmail = new EmailModel();
                    StringBuilder body = new StringBuilder();
                    body.AppendLine("Hello user.Your password for MarAirAdmin is:");
                    body.AppendLine(newPassword);
                    body.AppendLine("Your are assigned as:");
                    body.AppendLine(model.Role);
                    modelEmail.Body = body.ToString();
                    modelEmail.From = "marian.surdu@blue-air.ro";
                    modelEmail.To = model.Email;
                    modelEmail.Subject = "Your account for MarAir was created";
                    eml.sendEmail(modelEmail);
                }
               
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
           
        }


        [Route("api/usersgroups")]
        [HttpGet]
        public IHttpActionResult UsersGroups()
        {
            try
            {
                var roleManager = Request.GetOwinContext().Get<ApplicationRoleManager>();
                var userManager = Request.GetOwinContext().Get<ApplicationUserManager>();
                var roles = roleManager.Roles.ToList();
                Dictionary<string, List<UserGroup>> groups = new Dictionary<string, List<UserGroup>>();

                foreach (var role in roles)
                {
                    var dataUsersGroup = roleManager.Roles.Where(p => p.Id == role.Id).Select(p => new { p.Name, p.Users }).FirstOrDefault();
                    List<UserGroup> list=new List<UserGroup>();
                    if (dataUsersGroup != null) { 
                    foreach (var user in dataUsersGroup.Users)
                    {
                        UserGroup userg=new UserGroup();
                        var userdata = userManager.Users.FirstOrDefault(p => p.Id == user.UserId);
                        if (userdata != null)
                        {
                            userg.UserId = userdata.Id;
                            userg.Email = userdata.Email;
                            userg.Username = userdata.UserName;
                            list.Add(userg);
                        }
                        
                      }
                        groups.Add(role.Name, list);
                    }
                   }
                return Ok(groups);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
