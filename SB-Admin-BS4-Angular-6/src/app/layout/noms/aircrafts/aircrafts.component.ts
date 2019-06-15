import {Component, OnInit, ViewChild} from '@angular/core';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import {jqxWindowComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import {jqxInputComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import {NomsService} from '../noms.service';

@Component({
    selector: 'app-aircrafts',
    templateUrl: './aircrafts.component.html',
    styleUrls: ['./aircrafts.component.scss']
})
export class AircraftsComponent implements OnInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    @ViewChild('myWindow') myWindow: jqxWindowComponent;
    @ViewChild('regno') regno: jqxInputComponent;
    @ViewChild('owner') owner: jqxInputComponent;
    @ViewChild('seats') seats: jqxInputComponent;
    @ViewChild('tank') tank: jqxInputComponent;
    @ViewChild('tankreserve') tankreserve: jqxInputComponent;
    dataLoaded = false;
    dataGrid = this.getAircrafts();
    dataServer = [];
    editrow = -1;
    /*[{id: 1, regno: 'YR-BMP', owner: 'MarAIR', seats: 80, tank: 10000, tankreserve: 3000},
                {id: 2, regno: 'YR-BAR', owner: 'MarAIR', seats: 70, tank: 10000, tankreserve: 3000},
                {id: 3, regno: 'YR-BAZ', owner: 'MarAIR', seats: 80, tank: 11000, tankreserve: 3500},
                {id: 4, regno: 'YR-AMA', owner: 'MarAIR', seats: 85, tank: 10000, tankreserve: 3000},
                {id: 5, regno: 'YR-CCB', owner: 'WizzAIR', seats: 141, tank: 20000, tankreserve: 9000}]*/
    source =
        {
            localdata: this.dataGrid ,
            datatype: 'array',
            datafields:
                [
                    {name: 'id', type: 'number'},
                    {name: 'regno', type: 'string'},
                    {name: 'owner', type: 'string'},
                    {name: 'seats', type: 'string'},
                    {name: 'tank', type: 'number'},
                    {name: 'tankreserve', type: 'number'}
                ]
        };
    dataAdapter = new jqx.dataAdapter(this.source);
    columns = [
        {text: 'Nr.crt', datafield: 'id', width: 200},
        {text: 'RegNo', datafield: 'regno', width: 200},
        {text: 'Owner', datafield: 'owner', width: 190},
        {text: 'Seats', datafield: 'seats', width: 190},
        {text: 'Fuel', datafield: 'tank', width: 190},
        {text: 'Reserve', datafield: 'tankreserve', width: 190},

        {
            text: 'Edit', datafield: 'Edit', columntype: 'button',
            cellsrenderer: (): string => {
                return 'Edit';
            },
            buttonclick: (row: number): void => {
                // get the data and append in to the inputs
                this.editrow = row;
                const dataRecord = this.myGrid.getrowdata(this.editrow);
                this.seats.val(dataRecord.seats);
                this.tank.val(dataRecord.tank);
                this.tankreserve.val(dataRecord.tankreserve);
                this.owner.val(dataRecord.owner);
                this.regno.val(dataRecord.regno);
                this.myWindow.position({x: 68, y: 368});
                this.myWindow.open();
            }
        }
    ];

    constructor(private nomService: NomsService) {
    }

    generateRow(data: any) {
        const row = {};
        row['id'] = data.Id;
        row['regno'] = data.AircraftName;
        row['owner'] = '-';
        row['seats'] = data.MaxCapacity;
        row['tank'] = data.MaxFuel;
        row['tankreserve'] = 4000;
        return row;
    }

    getAircrafts() {
        const data = [];
        this.nomService.getAircrafts().subscribe(res => {
            console.log(res);
            this.dataServer = res;
            res.forEach((aircraft) => {
                data.push(this.generateRow(aircraft));
            });
            this.dataLoaded = true;

        });
        return data;
    }

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    saveBtn(): void {
        if (this.editrow >= 0) {
            const row = {};
            const rowID = this.myGrid.getrowid(this.editrow);
            this.dataServer[rowID].AircraftName = this.regno.val();
            this.dataServer[rowID].MaxCapacity = this.seats.val();
            this.dataServer[rowID].MaxFuel = this.tank.val();
            row['id'] = this.dataServer[rowID].Id;
            row['regno'] = this.dataServer[rowID].AircraftName;
            row['owner'] = '-';
            row['seats'] = this.dataServer[rowID].MaxCapacity;
            row['tank'] = this.dataServer[rowID].MaxFuel;
            row['tankreserve'] = 4000;
            this.myGrid.updaterow(rowID, row);
            this.nomService.updateAircraft(this.dataServer[rowID]).subscribe((res) => {
                console.log('Updated!!');
            });

            this.myWindow.hide();
        }
    }

    cancelBtn(): void {
        this.myWindow.hide();
    }

    ngOnInit() {
    }

}
