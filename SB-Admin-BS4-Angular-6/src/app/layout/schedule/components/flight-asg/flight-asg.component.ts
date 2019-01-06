import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flight-asg',
  templateUrl: './flight-asg.component.html',
  styleUrls: ['./flight-asg.component.scss']
})
export class FlightAsgComponent implements OnInit {
  @Input() activity: string;
  constructor() { }

  ngOnInit() {
  }

}
