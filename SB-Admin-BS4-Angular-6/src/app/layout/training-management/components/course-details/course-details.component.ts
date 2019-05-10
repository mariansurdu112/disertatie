import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
    phases: any = [{Id: 1, Name: 'Mockup'},
        {Id: 2, Name: 'Simulator'},
        {Id: 3, Name: 'Flight'},
        {Id: 4, Name: 'Line Check'}];
  constructor() { }

  ngOnInit() {
  }

}
