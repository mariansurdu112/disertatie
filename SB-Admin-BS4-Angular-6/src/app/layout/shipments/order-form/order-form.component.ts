import {FormGroup} from '@angular/forms';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Order} from '../../../models/order.model';

@Component({
    selector: 'app-order-form',
    templateUrl: './order-form.component.html',
    styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
    @Input('aircrafts') aircrafts: any;
    @Input('shippers') shippers: any;
    @Input('partNumbers') partNumbers: any;
    @Input('reqPriority') reqPriority: any;
    @Output() checkOrder = new EventEmitter<string>();
    orderForm: FormGroup;
    orderNumber: string;
    checked: boolean;
    orderData: Order = new Order(null, '', '', null, '', null, '', '', '', '',
        '', null, '', '', null, null, '', false, false, false);

    checkData() {
        this.checked = true;
        this.orderNumber = Math.floor(Math.random() * 1000000).toString();
        this.orderData.OrderNumber = this.orderNumber;
        this.orderData.User = localStorage.getItem('user');
        this.orderData.OrderDate = new Date();
        console.log(this.orderData);
        this.checkOrder.emit(JSON.stringify(this.orderData));
    }

    constructor() {
    }

    ngOnInit() {
    }

}
