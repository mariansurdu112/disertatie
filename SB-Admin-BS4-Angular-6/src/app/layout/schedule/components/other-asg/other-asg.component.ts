import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other-asg',
  templateUrl: './other-asg.component.html',
  styleUrls: ['./other-asg.component.scss']
})
export class OtherAsgComponent implements OnInit {
  @Input() activity: string;
  constructor() { }

  ngOnInit() {
  }

}
