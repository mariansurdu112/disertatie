import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import {Airport} from '../../../models/airport.model';

@Component({
  selector: 'app-airport-base',
  templateUrl: './airport-base.component.html',
  styleUrls: ['./airport-base.component.scss']
})
export class AirportBaseComponent implements OnInit {

    @ViewChild('myGrid') myGrid: jqxGridComponent;

    airportsBases: Array<any> = [
        {
            id: 1,
            iataCode: 'AHO',
            name: 'ALGHERO',
            country: 'IT',
            opBase: true
        },
        {
            id: 2,
            iataCode: 'STR',
            name: 'STUTTGART',
            country: 'DE',
            opBase: true
        },
        {
            id: 3,
            iataCode: 'BRU',
            name: 'BRUSSELS NATL',
            country: 'BEL',
            opBase: true
        },
        {
            id: 4,
            iataCode: 'FCO',
            name: 'FIUMICINO',
            country: 'ITA',
            opBase: true
        },
        {
            id: 5,
            iataCode: 'TRN',
            name: 'TORINO',
            country: 'ITA',
            opBase: true
        },
        {
            id: 6,
            iataCode: 'OTP',
            name: 'OTOPENI',
            country: 'BEL',
            opBase: true
        },

    ];
    editrow = -1;
    source =
        {
            localdata: this.generateData(),
            datatype: 'array',
            datafields:
                [
                    { name: 'name', type: 'string' },
                    { name: 'iatacode', type: 'string' },
                    { name: 'country', type: 'string' },
                    { name: 'opBase', type: 'bool' }
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
        { text: 'Name', datafield: 'name', width: 100, editable: true },
        { text: 'IataCode', datafield: 'iatacode', width: 190, editable: true },
        { text: 'Country', datafield: 'country', width: 190, editable: true },
        { text: 'Operational base', datafield: 'opBase', width: 190, editable: true },
    ];

    generaterow(data: any): any {
        const row = {};
        row['name'] = data.name;
        row['iatacode'] = data.iataCode;
        row['icaocode'] = data.icaoCode;
        row['country'] = data.country;
        row['opBase'] = data.opBase;
        console.log(row);
        return row;
    }
    generateData(): any {
        const data = {};
        console.log(this.airportsBases);
        for (let i = 0; i < this.airportsBases.length; i++) {
            const row = this.generaterow(this.airportsBases[i]);
            data[i] = row;
        }
        return data;
    }
    ngOnInit(): void {

    }


}
