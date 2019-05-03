import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  @Input('aircrafts') aircrafts: any;
  @Input('shippers') shippers: any;
  @Input('partNumbers') partNumbers: any;
  orderForm:FormGroup;
  checkData() {
    console.log(this.orderForm);
  }

  constructor() { }

  ngOnInit() {
  }

}
