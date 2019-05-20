import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-request',
  templateUrl: './flight-request.component.html',
  styleUrls: ['./flight-request.component.scss']
})
export class FlightRequestComponent implements OnInit {
selectedDate: any;
  constructor() { }

  ngOnInit() {
  }

}
