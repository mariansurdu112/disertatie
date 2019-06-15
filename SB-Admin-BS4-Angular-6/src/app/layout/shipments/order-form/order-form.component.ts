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
    selectedPartNumber: any;
    selectedAircraft: any;
    orderData: Order = new Order(null, '', '', null, '', null, null, '', null, '',
        '', null, '', '', null, null, '', false, false, false);

    updateOrderPartnumber(pNo: any) {
        // tslint:disable-next-line:triple-equals
        this.selectedPartNumber = this.partNumbers.filter((res) => res.Id == pNo );
        console.log(this.selectedPartNumber);
    }

    updateOrderAircraft(aircraft: any) {
        console.log(aircraft);
        // tslint:disable-next-line:triple-equals
        this.selectedAircraft = this.aircrafts.filter((res) => res.Id == aircraft );
        console.log(this.selectedAircraft);
    }

    checkData() {
        this.checked = true;
        this.orderNumber = Math.floor(Math.random() * 1000000).toString();
        this.orderData.OrderNumber = this.orderNumber;
        this.orderData.UserName = localStorage.getItem('user');
        this.orderData.OrderDate = new Date();
        console.log(this.orderData);
        this.orderData.PartNumber=this.selectedPartNumber;
        this.orderData.Aircraft=this.selectedAircraft;
        this.checkOrder.emit(JSON.stringify(this.orderData));
    }

    constructor() {
    }

    ngOnInit() {
    }

}
