import { Component, OnInit, Input } from '@angular/core';
import { LineCheckForm } from '../../../../models/training/lckform.model';

@Component({
  selector: 'app-forms-line-check',
  templateUrl: './forms-line-check.component.html',
  styleUrls: ['./forms-line-check.component.scss']
})
export class FormsLineCheckComponent implements OnInit {

  @Input('forms') forms: Array<LineCheckForm> = [];
  constructor() { }

  ngOnInit() {
  }

}
