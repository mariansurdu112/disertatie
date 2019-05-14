
import {Component, OnInit, ViewChild} from '@angular/core';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import {jqxWindowComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import {jqxInputComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    @ViewChild('myWindow') myWindow: jqxWindowComponent;
    @ViewChild('remarks') remarks: jqxInputComponent;
    @ViewChild('role') role: jqxInputComponent;


    editrow = -1;
    source =
        {
            localdata: [
                {id: 1, role: 'ADMIN'},
                {id: 2, role: 'MANAGER', area: 'CABIN'},
                {id: 3, role: 'PLANIFICATOR', area: 'CABIN'},
                {id: 4, role: 'LOGISTIC', area: 'COCKPIT'},
                {id: 5, role: 'TECHNIC', area: 'COCKPIT'}
            ],
            datatype: 'array',
            datafields:
                [
                    { name: 'id', type: 'number' },
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
        { text: 'Role', datafield: 'role', width: 300 },
        { text: 'Remarks', datafield: 'remarks', width: 250 },
        {
            text: 'Edit', datafield: 'Edit', columntype: 'button', width: 100,
            cellsrenderer: (): string => {
                return 'Edit';
            },
            buttonclick: (row: number): void => {
                // get the data and append in to the inputs
                this.editrow = row;
                const dataRecord = this.myGrid.getrowdata(this.editrow);
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
