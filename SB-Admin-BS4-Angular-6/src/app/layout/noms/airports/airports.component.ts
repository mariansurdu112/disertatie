import {Component, OnInit, ViewChild} from '@angular/core';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import {jqxWindowComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import {jqxInputComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import {NomsService} from '../noms.service';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    @ViewChild('myWindow') myWindow: jqxWindowComponent;
    @ViewChild('id') id: jqxInputComponent;
    @ViewChild('name') name: jqxInputComponent;
    @ViewChild('iatacode') iatacode: jqxInputComponent;
    @ViewChild('location') location: jqxInputComponent;

    dataLoaded = false;
    editrow = -1;
    dataGrid = this.getAirports();
    dataServer = [];

    /*[{id: 1, name: 'Otopeni', iatacode: 'OTP', location: 'LROP'}]*/
    source =
        {
            localdata: this.dataGrid,
            datatype: 'array',
            datafields:
                [
                    { name: 'id', type: 'number' },
                    { name: 'name', type: 'string' },
                    { name: 'iatacode', type: 'string' },
                    { name: 'location', type: 'string' }
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
        { text: 'Name', datafield: 'name', width: 200 },
        { text: 'IataCode', datafield: 'iatacode', width: 190 },
        { text: 'Location', datafield: 'location', width: 190 },
        {
            text: 'Edit', datafield: 'Edit', columntype: 'button',
            cellsrenderer: (): string => {
                return 'Edit';
            },
            buttonclick: (row: number): void => {
                // get the data and append in to the inputs
                this.editrow = row;
                const dataRecord = this.myGrid.getrowdata(this.editrow);
                this.name.val(dataRecord.name);
                this.iatacode.val(dataRecord.iatacode);
                this.location.val(dataRecord.location);
                this.myWindow.position({ x: 68, y: 368 });
                this.myWindow.open();
            }
        }
    ];
    saveBtn(): void {
        if (this.editrow >= 0) {
            const row = {};
            const rowID = this.myGrid.getrowid(this.editrow);
            this.myGrid.updaterow(rowID, row);
            this.myWindow.hide();
        }
    }
    cancelBtn(): void {
        this.myWindow.hide();
    }

    generateRow(data: any) {
        const row = {};
        row['id'] = data.Id;
        row['name'] = data.Name;
        row['iatacode'] = data.IataCode;
        row['location'] = data.Location;
        return row;
    }

    getAirports() {
        const data = [];
        this.nomService.getAirports().subscribe(res => {
            console.log(res);
            this.dataServer = res;
            res.forEach((airport) => {
                data.push(this.generateRow(airport));
            });
            this.dataLoaded = true;

        });
        return data;
    }
  constructor(private nomService: NomsService) { }

  ngOnInit() {
  }

}
