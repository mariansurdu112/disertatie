import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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


  addRowToGrid() {
    console.log("emit");
    const row=[];
    this.addRowEvent.emit(JSON.stringify(row));
  }

}
