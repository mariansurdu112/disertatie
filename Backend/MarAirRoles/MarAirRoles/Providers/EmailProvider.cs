using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net.Mail;
using System.Web;
using MarAirRoles.Models;

namespace MarAirRoles.Providers
{
    public class EmailProvider
    {
        public static void sendEmail(EmailModel dataEmail)
        {
            MailMessage msg = new MailMessage();
            msg.To.Add(new MailAddress(dataEmail.To, dataEmail.From));
            msg.From = new MailAddress(dataEmail.From, dataEmail.To);
            msg.Subject = dataEmail.Subject;
            msg.Body = dataEmail.Body;
            msg.IsBodyHtml = true;

            SmtpClient client = new SmtpClient();
            client.UseDefaultCredentials = false;
            client.Credentials = new System.Net.NetworkCredential("surdu_marian94@gmail.com", "b33kb0x!");
            client.Port = 587;
            client.Host = "smtp.office365.com";
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.EnableSsl = true;
            try
            {
                client.Send(msg);

            }
            catch (Exception ex)
            {

            }



        }
    }

   
}