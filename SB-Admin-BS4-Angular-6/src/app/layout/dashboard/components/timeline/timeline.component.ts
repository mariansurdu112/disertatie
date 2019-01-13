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
    const date = new Date(new Date().getFullYear(), new Date().getMonth(),
      new Date().getDate(), 13, new Date().getMinutes());
      console.log(date);
    const date1 = new Date(new Date().getFullYear(), new Date().getMonth(),
      new Date().getDate(), 15, new Date().getMinutes());
    console.log(date);
    const date2 = new Date(new Date().getFullYear(), new Date().getMonth(),
      new Date().getDate(), 18, new Date().getMinutes());
    console.log(date);
    const date3 = new Date(new Date().getFullYear(), new Date().getMonth(),
      new Date().getDate(), 7, new Date().getMinutes());
    console.log(date);

    const flt1 = new Flight(date1, 'OTP', 'FCO', '40m', '753', 40, date , false);
    const flt2 = new Flight(date, 'OTP', 'CTA', '60m', '743', 45, date1, true);
    const flt3 = new Flight(date, 'OTP', 'HEL', '30m', '713', 44, date, false);
    const flt4 = new Flight(date2, 'OTP', 'FCO', '40m', '753', 5, date2, true);
    const flt5 = new Flight(date, 'OTP', 'CTA', '60m', '743', 20, date, false);
    const flt6 = new Flight(date3, 'OTP', 'HEL', '30m', '713', 50, date3, true);
      this.flights.push(flt1);
      this.flights.push(flt2);
      this.flights.push(flt3);
      this.flights.push(flt4);
      this.flights.push(flt5);
      this.flights.push(flt6);

    this.flights = this.flights.sort((a: Flight, b: Flight) =>
      a.dep_date.getTime() - b.dep_date.getTime()
    );

  }

}
