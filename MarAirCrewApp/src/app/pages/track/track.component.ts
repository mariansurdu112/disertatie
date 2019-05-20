import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  title: string = 'MarAirCrewApp Aircraft tracking';
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
  constructor() { }

  ngOnInit() {
  }

}
