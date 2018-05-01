import {Component, OnInit, ViewChild} from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-aircraft-tracking',
  templateUrl: './aircraft-tracking.component.html',
  styleUrls: ['./aircraft-tracking.component.scss']
})
export class AircraftTrackingComponent implements OnInit {
    title = 'My first AGM project';
    lat = 51.678418;
    lng = 7.809007;
    icon = 'https://d30y9cdsu7xlg0.cloudfront.net/png/9163-200.png';


  ngOnInit() {

  }



}
