import { Component, OnInit } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-select',
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.scss']
})
export class DateSelectComponent implements OnInit {
  from: any;
  to: any;
  defaultTime = {hour: 13, minute: 30};
  meridianTime = {hour: 13, minute: 30};
  meridian = true;

  SecondsTime: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;

  customTime: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;

  toggleSeconds() {
      this.seconds = !this.seconds;
  }

  toggleMeridian() {
      this.meridian = !this.meridian;
  }
 constructor() { }

  ngOnInit() {
  }

}
