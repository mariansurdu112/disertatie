using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading;
using System.Web;
using FluentScheduler;
using MarAirRoles.Models;
using MarAirRoles.Providers;
using Microsoft.Win32;
using Registry = FluentScheduler.Registry;

namespace MarAirRoles.Jobs
{
    public class ShipmentsRegistry : Registry
    {
        public ShipmentsRegistry()
        {
            Schedule((() => new Thread(() => { new ShipmentsJob(); }).Start())).ToRunEvery(3).Hours();
        }
    }

    public class ShipmentsJob
    {
        public ShipmentsJob()
        {
            DoJob();
        }

        public void DoJob()
        {
            ApplicationDbContext db=new ApplicationDbContext();
            var criticalOrders = db.Shipments.Where(p => p.Critical).ToList();
            List<IDictionary<string, string>> listDict = new List<IDictionary<string, string>>();
            foreach (var order in criticalOrders)
            {
                IDictionary<string, string> dict = new Dictionary<string, string>();
                dict.Add("Order#", order.OrderNumber);
                dict.Add("NoGo/Critical", order.UserId.ToString());
                dict.Add("Req no", order.RequirementNumber);
               
                dict.Add("Part no", order.Fk_Part_No.Description);
                dict.Add("Description", order.Fk_Part_No.Description);
                dict.Add("Aircraft", order.FK_NOM_AIRCRAFT.AircraftName);
                dict.Add("From", order.From);
                dict.Add("To", order.To);
                dict.Add("Shipper", order.Shipper);
                dict.Add("AWB", order.Awb);
                listDict.Add(dict);
                if (criticalOrders.Count() != 0)
                {
                    EmailModel email = new EmailModel();
                    StringBuilder sb = new StringBuilder();
                    sb.AppendLine($"<p style='font-size:18px'>{ConfigurationManager.AppSettings["MessageBodyOrders"]}</p>");
                    sb.AppendLine(ShipmentsMailGenerator.GenerateTableOrdersEmail(listDict));
                    email.Body = sb.ToString();
                    email.Subject = "No Go/Critical parts";
                    email.To = ConfigurationManager.AppSettings["EmailTest"];
                    email.From = ConfigurationManager.AppSettings["MailFrom"];
                    EmailProvider.sendEmail(email);
                }
            }
        }
    }
   
}