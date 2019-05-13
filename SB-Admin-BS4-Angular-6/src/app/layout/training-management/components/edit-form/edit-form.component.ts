import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

    constructor(private modalService: NgbModal) { }
    closeResult: string;
    @Input('formId') formId: number;
    @Output() editFormEvent = new EventEmitter<string>();
    form: any;
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
    saveEdit() {
        console.log('emit');
        this.editFormEvent.emit(JSON.stringify(this.form));
    }


}
