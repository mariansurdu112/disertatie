import { Component, OnInit } from '@angular/core';
import {Flight} from '../flight/flight.model';



@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
    public flights: any[] = [];
    constructor() { }

  ngOnInit() {
        const flt1 = new Flight(new Date(), 'OTP', 'FCO', '40m', '753', 152, new Date(), false);
      const flt2 = new Flight(new Date(), 'OTP', 'CTA', '60m', '743', 120, new Date(), true);
      const flt3 = new Flight(new Date(), 'OTP', 'HEL', '30m', '713', 100, new Date(), false);
      const flt4 = new Flight(new Date(), 'OTP', 'FCO', '40m', '753', 152, new Date(), true);
      const flt5 = new Flight(new Date(), 'OTP', 'CTA', '60m', '743', 120, new Date(), true);
      const flt6 = new Flight(new Date(), 'OTP', 'HEL', '30m', '713', 100, new Date(), true);
        this.flights.push(flt1);
        this.flights.push(flt2);
      this.flights.push(flt3);
      this.flights.push(flt4);
      this.flights.push(flt5);
      this.flights.push(flt6);

  }

}
