import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-positioning-asg',
  templateUrl: './positioning-asg.component.html',
  styleUrls: ['./positioning-asg.component.scss']
})
export class PositioningAsgComponent implements OnInit {
  @Input() activity: string;
  constructor() { }

  ngOnInit() {
  }

}
