import { FlightForm } from './../../../../models/training/fltform.model';
import { Component, OnInit, Input } from '@angular/core';
import { MockupForm } from '../../../../models/training/mockform.model';

@Component({
  selector: 'app-forms-flight',
  templateUrl: './forms-flight.component.html',
  styleUrls: ['./forms-flight.component.scss']
})
export class FormsFlightComponent implements OnInit {

  @Input('forms') forms: Array<FlightForm> = [];
  constructor() { }

  ngOnInit() {
  }



}
