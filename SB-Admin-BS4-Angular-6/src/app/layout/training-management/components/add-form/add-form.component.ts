import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { FormDataSheet } from '../../../../models/training/formData.model';

@Component({
    selector: 'app-add-form',
    templateUrl: './add-form.component.html',
    styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

    constructor(private modalService: NgbModal) { }
    forms: Array<string> = ['LFUS Progress Report', 'Line Check Form', 'OPC+LPC1', 'LOFT', 'Short Training 3', 
    'LPC Year 3', 'CPM-Normal Procedures']
    closeResult: string;
    trainingAddForm: FormGroup;
    instructortypes: Array<string> = ['TRI', 'TRE', 'LNC', 'LTC'];
    instructors: Array<string> = ['ANDREI ION', 'MARIAN SURDU', 'VASILE DANIEL', 'ANA SIMION', 'FLORIN SURDU'];
    @Output() addFormEvent = new EventEmitter<FormDataSheet>();
    formData: FormDataSheet = new FormDataSheet('', new Date(), '', '', 0);
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
    addForm() {
        console.log('emit');
        this.addFormEvent.emit(this.formData);
    }


}
