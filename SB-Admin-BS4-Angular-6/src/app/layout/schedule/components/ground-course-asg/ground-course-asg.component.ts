import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ground-course-asg',
  templateUrl: './ground-course-asg.component.html',
  styleUrls: ['./ground-course-asg.component.scss']
})
export class GroundCourseAsgComponent implements OnInit {
  @Input() activity: string;
  constructor() { }

  ngOnInit() {
  }

}
