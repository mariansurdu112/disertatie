import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-select',
  templateUrl: './time-select.component.html',
  styleUrls: ['./time-select.component.scss']
})
export class TimeSelectComponent implements OnInit {
  @Input() activity: string;
    start: any;
    end: any;
    errorMessage: string;
  constructor() { }

  ngOnInit() {
  }

}
