import { FlightsNomService } from './flights-nom.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyFlights } from '../../../models/companyflights.model';
import { Observable } from 'rxjs';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxWindowComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  flights: CompanyFlights[];
  dataLoaded = false;
  constructor(private flightsNomService: FlightsNomService) {
    this.flightsNomService.flights.subscribe(res => {
      this.flights = res;
    });
  }
  @ViewChild('myGrid') myGrid: jqxGridComponent;
  @ViewChild('myWindow') myWindow: jqxWindowComponent;
  @ViewChild('id') id: jqxInputComponent;
  @ViewChild('name') name: jqxInputComponent;
  @ViewChild('code') code: jqxInputComponent;

  editrow = -1;
  source =
    {
      localdata: [],
      datatype: 'array',
      datafields:
        [
          { name: 'from', type: 'string' },
          { name: 'to', type: 'string' },
          { name: 'iatadep', type: 'string' },
          { name: 'iataarr', type: 'string' },
          { name: 'radiocallsign', type: 'string' }
        ]
    };
  dataAdapter = new jqx.dataAdapter(this.source);
  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '100%';
    }

    return 850;
  }
  // tslint:disable-next-line:member-ordering
  columns = [
    { text: 'From', datafield: 'from', width: 200 },
    { text: 'To', datafield: 'to', width: 200 },
    { text: 'Iata Departure', datafield: 'iatadep', width: 200 },
    { text: 'Iata Arrival', datafield: 'iataarr', width: 200 },
    { text: 'Radio CallSign', datafield: 'radiocallsign', width: 200},
    {
      text: 'Save', datafield: 'Save', columntype: 'button', width: 200,
      cellsrenderer: (): string => {
        return 'Save';
      },
      buttonclick: (row: number): void => {
        // get the data and append in to the inputs
       alert('Saved');
      }
    }
  ];
  saveBtn(): void {
    if (this.editrow >= 0) {
      const row = {
        id: this.id.val(),
        name: this.name.val(),
        code: this.code.val()
      };
      const rowID = this.myGrid.getrowid(this.editrow);
      this.myGrid.updaterow(rowID, row);
      this.myWindow.hide();
    }
  }
  cancelBtn(): void {
    this.myWindow.hide();
  }

  generaterow(flight: CompanyFlights): any {
    const row = {};
    row['from'] = flight.From;
    row['to'] = flight.To;
    row['iatadep'] = flight.IataDep;
    row['iataarr'] = flight.IataArr;
    row['radiocallsign'] = flight.RadioCallSign;
    console.log(row);
    return row;
  }
  generateData(): any {
    console.log('Generate data:', this.flights);
    const data = {};
    for (let i = 0; i < this.flights.length; i++) {
      const row = this.generaterow(this.flights[i]);
      data[i] = row;
    }
    return data;
  }


  ngOnInit() {
    this.flightsNomService.getFlights().subscribe((res) => {
      this.flightsNomService.flights.next(res);
      console.log(this.flights);
      this.source.localdata = this.generateData();
      this.dataLoaded = true;
    });
  }

}
