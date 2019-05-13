import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
    selector: 'app-view-form',
    templateUrl: './view-form.component.html',
    styleUrls: ['./view-form.component.scss']
})
export class ViewFormComponent implements OnInit {

    closeResult: string;
    @Input('formId') formId: number;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    goToView() {

        this.router.navigate(['training/view']);
    }
}
