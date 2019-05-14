import { FlightPointsPipe } from './../../../shared/pipes/flight-points.pipe';

import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyFlights } from '../../../models/companyflights.model';
import { jqxListBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox';

@Component({
  selector: 'app-flight-select',
  templateUrl: './flight-select.component.html',
  styleUrls: ['./flight-select.component.scss'],
  providers: [FlightPointsPipe]
})
export class FlightSelectComponent implements OnInit {
  flights: CompanyFlights[];
  @ViewChild('listbox') myListBox: jqxListBoxComponent;
  constructor(private flightPointsPipe: FlightPointsPipe) {
    /*this.flightService.flights.subscribe(res => {
      this.flights = res;
    });*/
  }

  shirts: string[];
  renderer = (index: number, label: string, value: string): any => {
    // tslint:disable-next-line:max-line-length
    const imgUrl = 'https://static.dezeen.com/uploads/2017/10/zunum-electric-aircraft-to-launch_dezeen_hero.jpg';
    const img = '<img height="70" width="70" src="' + imgUrl + '"/>';
    const table = '<table style="min-width: 130px;"><tr><td style="width: 80px;">' + img + '</td><td>' + label + '</td></tr></table>';
    return table;
  }
  click(event: any): void {
    this.myListBox.clearFilter();
  }

  ngOnInit() {
    /*/!*this.flightService.getFlights().subscribe(p => {
      this.flightService.flights.next(p);*!/
      this.shirts = this.flightPointsPipe.transform(this.flights);
      console.log(this.shirts);
    });*/
  }

}
