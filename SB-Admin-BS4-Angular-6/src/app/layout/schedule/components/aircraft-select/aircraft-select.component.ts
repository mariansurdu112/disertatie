import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aircraft-select',
  templateUrl: './aircraft-select.component.html',
  styleUrls: ['./aircraft-select.component.scss']
})
export class AircraftSelectComponent implements OnInit {
  @Input() activity: string;
  constructor() { }

  ngOnInit() {
  }

}
