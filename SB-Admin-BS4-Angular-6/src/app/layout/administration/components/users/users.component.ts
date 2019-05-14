import {Component, OnInit, ViewChild} from '@angular/core';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import {jqxWindowComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import {jqxInputComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    @ViewChild('myWindow') myWindow: jqxWindowComponent;
    @ViewChild('id') id: jqxInputComponent;
    @ViewChild('name') name: jqxInputComponent;
    @ViewChild('role') role: jqxInputComponent;

    editrow = -1;
    source =
        {
            localdata: [
                {id: 1, name: 'Marian Surdu', role: 'ADMIN'},
                {id: 2, name: 'Ana Simion', role: 'LOGISTIC'},
                {id: 3, name: 'Ionel Ion', role: 'PLANIFICATOR'},
                {id: 4, name: 'Florin Surdu', role: 'TECHNIC'}],
            datatype: 'array',
            datafields:
                [
                    { name: 'id', type: 'number' },
                    { name: 'name', type: 'string' },
                    { name: 'role', type: 'string' }
                ]
        };
    dataAdapter = new jqx.dataAdapter(this.source);
    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }
    columns = [
        { text: 'ID', datafield: 'id', width: 200 },
        { text: 'Name', datafield: 'name', width: 355 },
        { text: 'Role', datafield: 'role', width: 190 },
        {
            text: 'Edit', datafield: 'Edit', columntype: 'button', width: 100,
            cellsrenderer: (): string => {
                return 'Edit';
            },
            buttonclick: (row: number): void => {
                // get the data and append in to the inputs
                this.editrow = row;
                const dataRecord = this.myGrid.getrowdata(this.editrow);
                this.name.val(dataRecord.name);
                this.role.val(dataRecord.role);
                this.myWindow.position({ x: 68, y: 368 });
                this.myWindow.open();
            }
        }
    ];
    saveBtn(): void {
        if (this.editrow >= 0) {
            const row = {

            };
            const rowID = this.myGrid.getrowid(this.editrow);
            this.myGrid.updaterow(rowID, row);
            this.myWindow.hide();
        }
    }
    cancelBtn(): void {
        this.myWindow.hide();
    }
    constructor() { }

    ngOnInit() {
    }


}
