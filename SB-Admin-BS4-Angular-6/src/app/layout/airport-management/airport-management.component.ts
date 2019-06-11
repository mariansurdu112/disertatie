import {Component, OnInit, ViewChild} from '@angular/core';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import {jqxWindowComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import {jqxInputComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import {Airport} from '../../models/airport.model';

@Component({
  selector: 'app-airport-management',
  templateUrl: './airport-management.component.html',
  styleUrls: ['./airport-management.component.scss']
})
export class AirportManagementComponent implements OnInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;

    airports: Array<Airport> = [
        {
            Id: 1,
            IataCode: 'AHO',
            IcaoCode: 'LIEA',
            FuelDensity: '0.802',
            Timezone: '-120',
            Name: 'ALGHERO',
            Contact: 'ALGHERO@centree.com:(903) 433-3717',
            Country: 'IT',
            Latitude: '79.647317',
            Longitude: '-32.017325',
            TaxiIn: 10,
            TaxiOut: 10,
            Category: 'A',
            Sector: 'MH'
        },
        {
            Id: 2,
            IataCode: 'STR',
            IcaoCode: 'EDDS',
            FuelDensity: '0.802',
            Timezone: '-180',
            Name: 'STUTTGART',
            Contact: 'str@airport.com:(802) 433-3767',
            Country: 'DE',
            Latitude: '19.647317',
            Longitude: '32.017325',
            TaxiIn: 10,
            TaxiOut: 10,
            Category: 'A',
            Sector: 'MH'
        },
        {
            Id: 3,
            IataCode: 'BRU',
            IcaoCode: 'EBBR',
            FuelDensity: '0.802',
            Timezone: '-180',
            Name: 'BRUSSELS NATL',
            Contact: 'BRUSSELSNATL@airport.com:(102) 433-3717',
            Country: 'BEL',
            Latitude: '29.647317',
            Longitude: '-32.017325',
            TaxiIn: 10,
            TaxiOut: 10,
            Category: 'A',
            Sector: 'MH'
        },
        {
            Id: 4,
            IataCode: 'FCO',
            IcaoCode: 'LIRF',
            FuelDensity: '0.802',
            Timezone: '-180',
            Name: 'FIUMICINO',
            Contact: 'itafco@airport.com:(102) 433-3717',
            Country: 'ITA',
            Latitude: '19.647317',
            Longitude: '22.017325',
            TaxiIn: 10,
            TaxiOut: 10,
            Category: 'A',
            Sector: 'MH'
        },
        {
            Id: 5,
            IataCode: 'TRN',
            IcaoCode: 'LIMF',
            FuelDensity: '0.802',
            Timezone: '-180',
            Name: 'TORINO',
            Contact: 'trn@airport.com:(102) 433-3717',
            Country: 'ITA',
            Latitude: '29.647317',
            Longitude: '-32.017325',
            TaxiIn: 10,
            TaxiOut: 10,
            Category: 'A',
            Sector: 'MH'
        },
        {
            Id: 6,
            IataCode: 'OTP',
            IcaoCode: 'LROP',
            FuelDensity: '0.802',
            Timezone: '-180',
            Name: 'OTOPENI',
            Contact: 'otp@airport.com:(021) 433-3717',
            Country: 'BEL',
            Latitude: '24.647317',
            Longitude: '44.32.017325',
            TaxiIn: 10,
            TaxiOut: 10,
            Category: 'A',
            Sector: 'MH'
        },
        {
            Id: 1,
            IataCode: 'AHO',
            IcaoCode: 'LIEA',
            FuelDensity: '0.802',
            Timezone: '-120',
            Name: 'ALGHERO',
            Contact: 'ALGHERO@centree.com:(903) 433-3717',
            Country: 'IT',
            Latitude: '79.647317',
            Longitude: '-32.017325',
            TaxiIn: 10,
            TaxiOut: 10,
            Category: 'A',
            Sector: 'MH'
        },
        {
            Id: 2,
            IataCode: 'STR',
            IcaoCode: 'EDDS',
            FuelDensity: '0.802',
            Timezone: '-180',
            Name: 'STUTTGART',
            Contact: 'str@airport.com:(802) 433-3767',
            Country: 'DE',
            Latitude: '19.647317',
            Longitude: '32.017325',
            TaxiIn: 10,
            TaxiOut: 10,
            Category: 'A',
            Sector: 'MH'
        },
        {
            Id: 3,
            IataCode: 'BRU',
            IcaoCode: 'EBBR',
            FuelDensity: '0.802',
            Timezone: '-180',
            Name: 'BRUSSELS NATL',
            Contact: 'BRUSSELSNATL@airport.com:(102) 433-3717',
            Country: 'BEL',
            Latitude: '29.647317',
            Longitude: '-32.017325',
            TaxiIn: 10,
            TaxiOut: 10,
            Category: 'A',
            Sector: 'MH'
        },
        {
            Id: 4,
            IataCode: 'FCO',
            IcaoCode: 'LIRF',
            FuelDensity: '0.802',
            Timezone: '-180',
            Name: 'FIUMICINO',
            Contact: 'itafco@airport.com:(102) 433-3717',
            Country: 'ITA',
            Latitude: '19.647317',
            Longitude: '22.017325',
            TaxiIn: 10,
            TaxiOut: 10,
            Category: 'A',
            Sector: 'MH'
        },
        {
            Id: 5,
            IataCode: 'TRN',
            IcaoCode: 'LIMF',
            FuelDensity: '0.802',
            Timezone: '-180',
            Name: 'TORINO',
            Contact: 'trn@airport.com:(102) 433-3717',
            Country: 'ITA',
            Latitude: '29.647317',
            Longitude: '-32.017325',
            TaxiIn: 10,
            TaxiOut: 10,
            Category: 'A',
            Sector: 'MH'
        },
        {
            Id: 6,
            IataCode: 'OTP',
            IcaoCode: 'LROP',
            FuelDensity: '0.802',
            Timezone: '-180',
            Name: 'OTOPENI',
            Contact: 'otp@airport.com:(021) 433-3717',
            Country: 'BEL',
            Latitude: '24.647317',
            Longitude: '44.32.017325',
            TaxiIn: 10,
            TaxiOut: 10,
            Category: 'A',
            Sector: 'MH'
        }
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
                    { name: 'icaocode', type: 'string' },
                    { name: 'country', type: 'string' },
                    { name: 'timezone', type: 'string' },
                    { name: 'latitude', type: 'string' },
                    { name: 'longitude', type: 'string' },
                    { name: 'taxiin', type: 'number' },
                    { name: 'taxiout', type: 'number' },
                    { name: 'category', type: 'string' },
                    { name: 'sector', type: 'string' },
                    { name: 'fueldensity', type: 'string' },
                    { name: 'contact', type: 'string' }
                ]
        };
    dataAdapter = new jqx.dataAdapter(this.source);
    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }
    // tslint:disable-next-line:member-ordering
    columns = [
         { text: 'IataCode', datafield: 'iatacode', width: 190, editable: true },
        { text: 'IcaoCode', datafield: 'icaocode', width: 90, editable: true },
        { text: 'Name', datafield: 'name', width: 100, editable: true },
        { text: 'Country', datafield: 'country', width: 190, editable: true },
        { text: 'Timezone', datafield: 'timezone', width: 190, editable: true },
        { text: 'Latitude', datafield: 'latitude', width: 190, editable: true },
        { text: 'Longitude', datafield: 'longitude', width: 190, editable: true },
        { text: 'Taxi In', datafield: 'taxiin', width: 90, editable: true },
        { text: 'Taxi out', datafield: 'taxiout', width: 90, editable: true },
        { text: 'Category', datafield: 'category', width: 90, editable: true },
        { text: 'Sector', datafield: 'sector', width: 90, editable: true },
        { text: 'Fuel Density', datafield: 'fueldensity', width: 190, editable: true },
        { text: 'Contact', datafield: 'contact', width: 190, editable: true }
    ];

    generaterow(data: Airport): any {
        const row = {};
        row['name'] = data.Name;
        row['iatacode'] = data.IataCode;
        row['icaocode'] = data.IcaoCode;
        row['country'] = data.Country;
        row['timezone'] = data.Timezone;
        row['latitude'] = data.Latitude;
        row['longitude'] = data.Longitude;
        row['taxiin'] = data.TaxiIn;
        row['taxiout'] = data.TaxiOut;
        row['category'] = data.Category;
        row['sector'] = data.Sector;
        row['fueldensity'] = data.FuelDensity;
        row['contact'] = data.Contact;
        console.log(row);
        return row;
    }

    generateData(): any {
        const data = {};
        for (let i = 0; i < this.airports.length; i++) {
            const row = this.generaterow(this.airports[i]);
            data[i] = row;
        }
        return data;
    }
    ngOnInit(): void {
    }

}
