import {Component, OnInit, ViewChild} from '@angular/core';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import {jqxWindowComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import {jqxInputComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import {NomsService} from '../noms.service';

@Component({
    selector: 'app-positions',
    templateUrl: './positions.component.html',
    styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    @ViewChild('myWindow') myWindow: jqxWindowComponent;
    @ViewChild('id') id: jqxInputComponent;
    @ViewChild('position') position: jqxInputComponent;
    @ViewChild('code') code: jqxInputComponent;

    dataLoaded = false;
    editrow = -1;
    dataGrid = this.getPositions();
    dataServer = [];
    /*
    *[{id: 1, position: 'Commander', code: 'PIC'},
                {id: 2, position: 'First Officer', code: 'F/O'},
                {id: 3, position: 'Commander', code: 'TRI'},
                {id: 4, position: 'Commander', code: 'TRE'},
                {id: 5, position: 'Flight Attendant', code: 'CC2'},
                {id: 6, position: 'Purser', code: 'SCC'},
                {id: 7, position: 'Observer', code: 'OBSERVER'},
                {id: 8, position: 'Commander', code: 'LTC'},
                {id: 9, position: 'Ground instructor', code: 'GND'}]*/
    source =
        {
            localdata: this.dataGrid,
            datatype: 'array',
            datafields:
                [
                    {name: 'id', type: 'number'},
                    {name: 'position', type: 'string'},
                    {name: 'code', type: 'string'}
                ]
        };
    dataAdapter = new jqx.dataAdapter(this.source);
    columns = [
        {text: 'Nr.crt', datafield: 'id', width: 200},
        {text: 'Position', datafield: 'position', width: 200},
        {text: 'Code', datafield: 'code', width: 190},
        {
            text: 'Edit', datafield: 'Edit', columntype: 'button',
            cellsrenderer: (): string => {
                return 'Edit';
            },
            buttonclick: (row: number): void => {
                // get the data and append in to the inputs
                this.editrow = row;
                const dataRecord = this.myGrid.getrowdata(this.editrow);
                this.position.val(dataRecord.position);
                this.code.val(dataRecord.code);
                this.myWindow.position({x: 68, y: 368});
                this.myWindow.open();
            }
        }
    ];

    constructor(private nomService: NomsService) {
    }

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    generateRow(data: any) {
        const row = {};
        row['id'] = data.Id;
        row['position'] = data.Label;
        row['code'] = data.Code;
        return row;
    }

    getPositions() {
        const data = [];
        this.nomService.getPositions().subscribe(res => {
            console.log(res);
            this.dataServer = res;
            res.forEach((activity) => {
                data.push(this.generateRow(activity));
            });
            this.dataLoaded = true;

        });
        return data;
    }

    saveBtn(): void {
        if (this.editrow >= 0) {

            const rowID = this.myGrid.getrowid(this.editrow);
            const row = {
                id: rowID,
                position: this.position.val(),
                code: this.code.val()
            };
            this.dataServer[rowID].Label = this.position.val();
            this.dataServer[rowID].Code = this.code.val();
            this.nomService.updatePosition(this.dataServer[rowID]).subscribe((res) => {
                console.log('Updated!!');
            });
            this.myGrid.updaterow(rowID, row);
            this.myWindow.hide();
        }
    }

    cancelBtn(): void {
        this.myWindow.hide();
    }

    ngOnInit() {
    }

}
