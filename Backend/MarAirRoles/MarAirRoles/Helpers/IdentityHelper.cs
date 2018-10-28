using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MarAirRoles.Helpers
{
    public static class IdentityHelper
    {
        public static int ToInt(this string source)
        {
            int result = 0;
            int.TryParse(source, out result);
            return result;

        }
     }
}