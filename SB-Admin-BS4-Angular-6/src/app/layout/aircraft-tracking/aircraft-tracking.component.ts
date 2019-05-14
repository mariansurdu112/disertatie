import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import {AircraftTrackingService} from './aircraft-tracking.service';

@Component({
  selector: 'app-aircraft-tracking',
  templateUrl: './aircraft-tracking.component.html',
  styleUrls: ['./aircraft-tracking.component.scss']
})
export class AircraftTrackingComponent implements OnInit {
  title = 'MarAir Aircraft Tracking';
  bounds = 44.26 + ',' + 22.16 + ',' + 22.16 + ',' + 44.2;
  params: any;
 constructor(private aircraftTrackingService: AircraftTrackingService) {
     this.params = {
         bounds: this.bounds,
         faa: 1,
         mlat: 1,
         flarm: 1,
         adsb: 1,
         gnd: 1,
         air: 1,
         vehicles: 1,
         estimated: 1,
         maxage: 7200,
         gliders: 1,
         stats: 1,
         callsign: 'KLM'
     };
     this.getData();
 }
  aircraftsLocations = [{
    lat: 44.4508499,
    lng: 26.1080211
  },
  {
    lat: 44.4479322,
    lng: 26.1184037
  },
  {
    lat: 44.4479322,
    lng: 26.0977821
  },
  {
    lat: 44.4263704,
    lng: 26.0584459
  }
  ];
  lat = 44.4438953;
  lng = 26.0678094;
  icon = {
    url: 'https://d30y9cdsu7xlg0.cloudfront.net/png/9163-200.png',
    scaledSize: {
      width: 60,
      height: 60
    }
  };

  getData() {
    this.aircraftTrackingService.getData(this.bounds, this.params).subscribe((res) => {
        console.log(res);
    });
  }

  ngOnInit() {

  }



}
