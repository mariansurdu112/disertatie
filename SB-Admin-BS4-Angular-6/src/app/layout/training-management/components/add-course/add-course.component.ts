import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

    constructor(private modalService: NgbModal) { }
    closeResult: string;
    @Output() addCourseEvent = new EventEmitter<string>();
    courseToAdd: any;
  ngOnInit() {
  }
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
    addCourseToGrid() {
        console.log('emit');
        this.addCourseEvent.emit(JSON.stringify(this.courseToAdd));
    }

}
