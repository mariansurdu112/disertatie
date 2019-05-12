import { SimulatorForm } from './../../../../models/training/simform.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forms-simulator',
  templateUrl: './forms-simulator.component.html',
  styleUrls: ['./forms-simulator.component.scss']
})
export class FormsSimulatorComponent implements OnInit {

  @Input('forms') forms: Array<SimulatorForm> = [];
  constructor() { }

  ngOnInit() {
    console.log(this.forms);
  }

}
