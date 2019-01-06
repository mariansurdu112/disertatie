import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-activity-select',
  templateUrl: './activity-select.component.html',
  styleUrls: ['./activity-select.component.scss']
})
export class ActivitySelectComponent implements OnInit {
  activitySelected: string;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }


  changeActivity(activity) {
    console.log(activity);
    this.activitySelected = activity;
    this.messageEvent.emit(this.activitySelected);
  }

}
