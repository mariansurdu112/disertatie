import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-personal-docs',
    templateUrl: './personal-docs.component.html',
    styleUrls: ['./personal-docs.component.scss']
})
export class PersonalDocsComponent implements OnInit {

    docs: Array<any> = [{
        Id: 1, Name: 'ID', ExpiryDate: new Date(2019, 9, 5), Icon: 'card'
    },
        {
            Id: 2, Name: 'Passport', ExpiryDate: new Date(2019, 12, 5), Icon: 'card'
        },
        {
            Id: 3, Name: 'Flying License', ExpiryDate: new Date(2020, 2, 15)
        },
        {
            Id: 4, Name: 'Medical License', ExpiryDate: new Date(2019, 9, 25)
        },
        {
            Id: 5, Name: 'Radio License', ExpiryDate: new Date(2019, 11, 29)
        },
        {
            Id: 6, Name: 'Employee contract', ExpiryDate: new Date(2099, 12, 31)
        }];

    constructor() {
    }

    ngOnInit() {
    }

}
