import {Component, OnInit, ViewChild} from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import { jqxWindowComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';




@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    @ViewChild('myWindow') myWindow: jqxWindowComponent;
    @ViewChild('id') id: jqxInputComponent;
    @ViewChild('name') name: jqxInputComponent;
    @ViewChild('code') code: jqxInputComponent;

    editrow: number = -1;
    source =
        {
            localdata: [],
            datatype: 'array',
            datafields:
                [
                    { name: 'id', type: 'number' },
                    { name: 'name', type: 'string' },
                    { name: 'code', type: 'string' }
                ]
        };
    dataAdapter = new jqx.dataAdapter(this.source);
    getWidth() : any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }
    columns = [
        { text: 'ID', datafield: 'id', width: 200 },
        { text: 'Name', datafield: 'name', width: 200 },
        { text: 'Code', datafield: 'code', width: 190 },
        {
            text: 'Edit', datafield: 'Edit', columntype: 'button',
            cellsrenderer: (): string => {
                return 'Edit';
            },
            buttonclick: (row: number): void => {
                //get the data and append in to the inputs
                this.editrow = row;
                let dataRecord = this.myGrid.getrowdata(this.editrow);
                this.id.val(dataRecord.id);
                this.name.val(dataRecord.name);
                this.code.val(dataRecord.code);
                this.myWindow.position({ x: 68, y: 368 });
                this.myWindow.open();
            }
        }
    ];
    saveBtn(): void {
        if (this.editrow >= 0) {
            let row =
                {
                    id: this.id.val(),
                    name: this.name.val(),
                    code: this.code.val()
                };
            let rowID = this.myGrid.getrowid(this.editrow);
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
