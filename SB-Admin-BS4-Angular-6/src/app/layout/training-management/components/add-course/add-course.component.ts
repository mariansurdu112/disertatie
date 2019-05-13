import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup} from '@angular/forms';
import {DOMTestComponentRenderer} from '@angular/platform-browser-dynamic/testing/src/dom_test_component_renderer';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

    closeResult: string;
    @Output() addCourseEvent = new EventEmitter<string>();
    courseToAdd: any = {Student: ' ', 'Course': '', Date: new Date(), Position: '', Comments: ''};
    trainingAddCourse: FormGroup;
    courses = ['Command Course OPC', 'Recurrent Course Year 2 Short',
        'Differences & Familiarization Course CL to NG', 'Recurrent Course Year 3 Short', 'Remedial Training - Long + LPC'];
    positions = ['PIC', 'TRE', 'TRI', 'LNC'];
    students = ['ANDREI ION', 'FLORIN ANDREI', 'FLORIN SURDU', 'CRISTIAN FIRU', 'ANA MARIA SIMION'];

    constructor(private modalService: NgbModal) {
    }

    ngOnInit() {
    }

    open(content) {
        this.modalService.open(content, {backdrop: 'static', windowClass: 'lg'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    addCourse() {
        console.log('emit');
        this.addCourseEvent.emit(JSON.stringify(this.courseToAdd));
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

}
