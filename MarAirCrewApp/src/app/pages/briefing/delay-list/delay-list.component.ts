import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delay-list',
  templateUrl: './delay-list.component.html',
  styleUrls: ['./delay-list.component.scss']
})
export class DelayListComponent implements OnInit {

  delays: Array<any> = [];
  constructor() { }

  addDelay() {
    this.delays.push({ Code: 0, Minutes: 0 });
  }
  ngOnInit() {
  }

}
