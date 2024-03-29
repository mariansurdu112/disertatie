import { MockupForm } from './../../../../models/training/mockform.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forms-mockup',
  templateUrl: './forms-mockup.component.html',
  styleUrls: ['./forms-mockup.component.scss']
})
export class FormsMockupComponent implements OnInit {

  @Input('forms') forms: Array<MockupForm> = [];
  constructor() { }

  ngOnInit() {
  }

}
