import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leave-asg',
  templateUrl: './leave-asg.component.html',
  styleUrls: ['./leave-asg.component.scss']
})
export class LeaveAsgComponent implements OnInit {
  @Input() activity: string;
  constructor() { }

  ngOnInit() {
  }

}
