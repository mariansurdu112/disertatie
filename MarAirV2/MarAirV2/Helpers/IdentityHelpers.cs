using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MarAirV2.Helpers
{
    public static class IdentityHelpers
    {

        public static int ToInt(this string source)
        {
            int result = 0;
            int.TryParse(source, out result);
            return result;
        }
    }
}