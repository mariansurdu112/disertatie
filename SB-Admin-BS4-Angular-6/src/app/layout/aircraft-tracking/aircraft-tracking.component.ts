import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-aircraft-tracking',
  templateUrl: './aircraft-tracking.component.html',
  styleUrls: ['./aircraft-tracking.component.scss']
})
export class AircraftTrackingComponent implements OnInit {
  title = 'My first AGM project';
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


  ngOnInit() {

  }



}
