import {Component, OnInit, ViewChild} from '@angular/core';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import {jqxWindowComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import {jqxInputComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';

@Component({
    selector: 'app-user-actions',
    templateUrl: './user-actions.component.html',
    styleUrls: ['./user-actions.component.scss']
})
export class UserActionsComponent implements OnInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    editrow = -1;
    source =
        {
            localdata: [
                {id: 1, action: 'Schedule', admin: false, manager: true, planificator: true, logistic: false, technic: false},
                {id: 2, action: 'Crew_Management', admin: true, manager: true, planificator: true, logistic: false, technic: false},
                {id: 3, action: 'Aircraft_Management', admin: false, manager: true, planificator: false, logistic: false, technic: false},
                {id: 4, action: 'Training_Management', admin: false, manager: true, planificator: false, logistic: false, technic: false},
                {id: 4, action: 'Airport_Management', admin: false, manager: true, planificator: false, logistic: false, technic: false},
                {id: 5, action: 'Aircraft_Management', admin: false, manager: true, planificator: false, logistic: false, technic: false},
                {id: 6, action: 'Aircraft_Traking', admin: true, manager: true, planificator: true, logistic: true, technic: true},
                {id: 7, action: 'Shipments', admin: false, manager: false, planificator: false, logistic: true, technic: true},
                {id: 8, action: 'Shipments_Add_Order', admin: false, manager: false, planificator: false, logistic: true, technic: false},
                // tslint:disable-next-line:max-line-length
                {id: 9, action: 'Shipments_Delete_Order', admin: false, manager: false, planificator: false, logistic: true, technic: false},
                // tslint:disable-next-line:max-line-length
                {id: 10, action: 'Shipments_Mark_Critical', admin: false, manager: false, planificator: false, logistic: true, technic: false},
                // tslint:disable-next-line:max-line-length
                {id: 11, action: 'Shipments_Remove_Critical', admin: false, manager: false, planificator: false, logistic: true, technic: false},
                // tslint:disable-next-line:max-line-length
                {id: 12, action: 'Shipments_Acknowledge_Logistic', admin: false, manager: false, planificator: false, logistic: true, technic: false},
                // tslint:disable-next-line:max-line-length
                {id: 13, action: 'Shipments_Acknowledge_Technical', admin: false, manager: false, planificator: false, logistic: false, technic: true},
                {id: 14, action: 'Noms', admin: true, manager: false, planificator: false, logistic: false, technic: false},
                {id: 15, action: 'Administration', admin: true, manager: false, planificator: false, logistic: false, technic: false}
            ],
            datatype: 'array',
            datafields:
                [
                    {name: 'id', type: 'number'},
                    {name: 'action', type: 'string'},
                    {name: 'admin', type: 'boolean'},
                    {name: 'manager', type: 'boolean'},
                    {name: 'planificator', type: 'boolean'},
                    {name: 'logistic', type: 'boolean'},
                    {name: 'technic', type: 'boolean'}
                ]
        };
    dataAdapter = new jqx.dataAdapter(this.source);
    columns = [
        {text: 'ID', datafield: 'id', width: 200, editable: false},
        {text: 'Action', datafield: 'action', width: 300, editable: false},
        {text: 'ADMIN', datafield: 'admin', width: 100, columntype: 'checkbox'},
        {text: 'MANAGER', datafield: 'manager', width: 100, columntype: 'checkbox'},
        {text: 'PLANIFICATOR', datafield: 'planificator', width: 140, columntype: 'checkbox'},
        {text: 'LOGISTIC', datafield: 'logistic', width: 100, columntype: 'checkbox'},
        {text: 'TECHNIC', datafield: 'technic', width: 100, columntype: 'checkbox'}
    ];

    constructor() {
    }

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return '100%';
    }

    ngOnInit() {
    }

}
