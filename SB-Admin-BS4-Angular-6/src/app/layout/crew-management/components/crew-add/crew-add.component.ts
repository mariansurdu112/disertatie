import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup} from '@angular/forms';
import {Crew} from '../../../../models/crew.model';
import {PersonalData} from '../../../../models/personaldata.model';

@Component({
  selector: 'app-crew-add',
  templateUrl: './crew-add.component.html',
  styleUrls: ['./crew-add.component.scss']
})
export class CrewAddComponent implements OnInit {
    closeResult: string;
    crewForm: FormGroup;
    constructor(private modalService: NgbModal) { }
    personalData: PersonalData = new PersonalData(null, null, null, null, null, null, null, null, null);
    crewData: Crew = new Crew(null, null, null, null, null, this.personalData);
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
    addCrew() {
        console.log('Add Crew');
    }
}
