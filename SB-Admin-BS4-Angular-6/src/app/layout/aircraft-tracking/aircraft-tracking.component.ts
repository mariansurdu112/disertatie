import { Component, OnInit, ViewChild } from '@angular/core';

import {AircraftTrackingService} from './aircraft-tracking.service';

@Component({
  selector: 'app-aircraft-tracking',
  templateUrl: './aircraft-tracking.component.html',
  styleUrls: ['./aircraft-tracking.component.scss']
})
export class AircraftTrackingComponent implements OnInit {
  title = 'MarAir Aircraft Tracking';
  bounds = '49.96,39.07,8.26,38.38';
  planes: Array<any> = [];
  // tslint:disable-next-line:max-line-length
  data: any = {
    FlightTime: '4 h 40 min', Departure: new Date(), Arrival: new Date(new Date().getTime() + 3600 * 2000),
    ActualDeparture: new Date(), ActualArrival: new Date(new Date().getTime() + 3600 * 2100)};
 constructor(private aircraftTrackingService: AircraftTrackingService) {
   setInterval(() => { this.getData(); }, 6000);
  }
  lat = 49.96;
  lng = 39.07;
  icon = {
    url: 'https://d30y9cdsu7xlg0.cloudfront.net/png/9163-200.png',
    scaledSize: {
      width: 60,
      height: 60
    }
  };



  getData() {

    const unusedProps = ['full_count', 'version', 'stats'];
    const data = {
      Bounds: this.bounds,
      Callsign: 'BMS'
    };
    this.aircraftTrackingService.getData(data).subscribe((res) => {
       const datax = JSON.parse(res);
       console.log(datax);
      const properties = Object.getOwnPropertyNames(datax).filter((prop) => {
          return !unusedProps.includes(prop);
      });
      console.log(properties);
      properties.forEach((prp) => {
         console.log(datax[prp]);
         const plane = {
           Latitude: datax[prp][1],
           Longitude: datax[prp][2],
           AircraftModel: datax[prp][8],
           RegNumber: datax[prp][9],
           From: datax[prp][11],
           To: datax[prp][12],
           FlightNumber: datax[prp][16],
           Callsign: datax[prp][18],
           Prop: prp
         };
         //adwd
         if (this.planes.includes(plane)) {
            const index = this.planes.indexOf(plane);
            console.log(index);
         } else {
           this.planes.push(plane);
         }
        console.log(this.planes);
      });
    });
  }

  ngOnInit() {
    this.getData();
  }



}
