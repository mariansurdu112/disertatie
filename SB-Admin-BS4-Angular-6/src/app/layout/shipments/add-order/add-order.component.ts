import {Component, OnInit, Output, EventEmitter, Input, ViewChild} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {OrderFormComponent} from '../order-form/order-form.component';
import {Order} from '../../../models/order.model';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  @Output() addRowEvent = new EventEmitter<string>();
  @Input('aircrafts') aircrafts: any;
  @Input('shippers') shippers: any;
  @Input('partNumbers') partNumbers: any;
  @Input('reqPriority') reqPriority: any;
  @ViewChild(OrderFormComponent) form;
  orderToAdd: Order;
  closeResult: string;
  activity: string;
  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, { backdrop: 'static', windowClass: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  ngOnInit() {
  }
    receiveOrder($event) {
      console.log('Receive order');
      this.orderToAdd = JSON.parse($event);
        console.log(JSON.parse($event));
    }

  addRowToGrid() {
    console.log('emit');
    this.addRowEvent.emit(JSON.stringify(this.orderToAdd));
  }

}
