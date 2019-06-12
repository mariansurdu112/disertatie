using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using RestSharp;

namespace MarAirRoles.Controllers
{
    public class FlightTrackController : ApiController
    {
        [Route("api/getFlightDataFlr")]
        [HttpPost]
        [AcceptVerbs("OPTIONS")]
        public IHttpActionResult GetFlightDataFlr(FlightRadarModel model)
        {
            var client = new RestClient("http://data-live.flightradar24.com");
            var request=new RestRequest("zones/fcgi/feed.js?bounds={bounds}" +
                                        "&faa={faa}" +
                                        "&mlat={mlat}" +
                                        "&flarm={flarm}" +
                                        "&adsb={adsb}" +
                                        "&gnd={gnd}" +
                                        "&air={air}" +
                                        "&vehicles={vehicles}" +
                                        "&estimated={estimated}" +
                                        "&maxage={maxage}" +
                                        "&gliders={gliders}" +
                                        "&stats={stats}" +
                                        "&callsign={callsign}", Method.GET);
            request.AddQueryParameter("bounds", model.Bounds);
            request.AddQueryParameter("faa", "1");
            request.AddQueryParameter("mlat", "1");
            request.AddQueryParameter("flarm", "1");
            request.AddQueryParameter("adsb", "1");
            request.AddQueryParameter("gnd", "1");
            request.AddQueryParameter("air", "1");
            request.AddQueryParameter("vehicles", "1");
            request.AddQueryParameter("estimated", "1");
            request.AddQueryParameter("maxage", "7200");
            request.AddQueryParameter("gliders", "1");
            request.AddQueryParameter("stats", "1");
            request.AddQueryParameter("callsign", model.CallSign);
            var response = client.Execute(request);
            return Ok(response.Content);
        }
    }

    public class FlightRadarModel
    {
        public string Bounds { get; set; }
        public string CallSign { get; set; }
    }
}
