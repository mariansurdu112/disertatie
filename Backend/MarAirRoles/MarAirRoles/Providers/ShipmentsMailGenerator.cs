using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;

namespace MarAirRoles.Providers
{
    public class ShipmentsMailGenerator
    {
        public static string GenerateTableOrdersEmail(List<IDictionary<string, string>> orderList)
        {
            StringBuilder body = new StringBuilder();
            body.AppendLine(" <table style='font-family:arial,sans-serif;border-collapse:collapse;width:100%'>" +
                            "<tr style='background-color:#4da6ff;border: 1px solid #dddddd;text-align: left;padding: 8px;'>");
            foreach (KeyValuePair<string, string> column in orderList.First())
            {
                body.AppendLine($"<td style='border: 1px solid #dddddd;text-align: left;padding: 8px;'> <b> {column.Key}</b> </td>");
            }

            foreach (var order in orderList)
            {
                body.AppendLine("<tr style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>");
                foreach (KeyValuePair<string, string> field in order)
                {
                    body.AppendLine($"<td style='border: 1px solid #dddddd;text-align: left;padding: 8px;font-size:12px'> {field.Value} </td>");
                }
                body.AppendLine("</tr>");
            }
            body.AppendLine("</tr>");
            body.AppendLine("</table>");
            return body.ToString();
        }
    }
}