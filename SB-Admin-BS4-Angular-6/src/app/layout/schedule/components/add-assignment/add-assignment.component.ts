import { ActivitySelectComponent } from './../activity-select/activity-select.component';
import { AccessDeniedModule } from './../../../../access-denied/access-denied.module';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.scss']
})
export class AddAssignmentComponent  {
  closeResult: string;
  activity: string;
  constructor(private modalService: NgbModal) { }

  open(content) {
      this.modalService.open(content, { backdrop: 'static', windowClass: 'hugeModal' }).result.then((result) => {
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
          return  `with: ${reason}`;
      }
  }

  activitySelected($event) {
      console.log($event);
    this.activity = $event;
  }

}
