import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises-section',
  templateUrl: './exercises-section.component.html',
  styleUrls: ['./exercises-section.component.scss']
})
export class ExercisesSectionComponent implements OnInit {

  exercises: Array<any> = [{
    Name: 'Preparation and Pre-flight ', NA: false, U: true, M: false, S: false, A: false
  },
  {
    Name: 'Start, Taxi, Take-off LOFT ', NA: false, U: true, M: false, S: false, A: false
  },
    {
      Name: 'TCAS RA', NA: false, U: true, M: false, S: false, A: false
    },
    {
      Name: 'Altitude', NA: false, U: false, M: false, S: true, A: false
    },
    {
      Name: 'Landing ', NA: false, U: true, M: false, S: false, A: false
    },
    {
      Name: 'After Landing LOFT ', NA: false, U: true, M: false, S: false, A: false
    },
    {
      Name: 'LOSS OF SYSTEM A AND B; MANUAL REVERSION', NA: false, U: true, M: false, S: false, A: false
    }];

  constructor() { }

  ngOnInit() {
  }

}
