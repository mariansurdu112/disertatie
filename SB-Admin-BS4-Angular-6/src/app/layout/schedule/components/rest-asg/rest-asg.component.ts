import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rest-asg',
  templateUrl: './rest-asg.component.html',
  styleUrls: ['./rest-asg.component.scss']
})
export class RestAsgComponent implements OnInit {
  @Input() activity: string;
  constructor() { }

  ngOnInit() {
  }

}
