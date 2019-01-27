import { FlightPointsPipe } from './../../../shared/pipes/flight-points.pipe';
import { FlightsNomService } from './../../noms/flights/flights-nom.service';
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
  constructor(private flightService: FlightsNomService, private flightPointsPipe: FlightPointsPipe) {
    this.flightService.flights.subscribe(res => {
      this.flights = res;
    });
  }

  shirts: string[];
  renderer = (index: number, label: string, value: string): any => {
    // tslint:disable-next-line:max-line-length
    const imgUrl = 'https://www.accenture.com/t20170525T050050Z__w__/us-en/_acnmedia/Accenture/DigitasLBi/Case-Studies/success-airbus-wearable-technology/images/Accenture-Airbus-a330-exterior-v1.pngla=en';
    const img = '<img height="70" width="70" src="' + imgUrl + '"/>';
    const table = '<table style="min-width: 130px;"><tr><td style="width: 80px;">' + img + '</td><td>' + label + '</td></tr></table>';
    return table;
  }
  click(event: any): void {
    this.myListBox.clearFilter();
  }

  ngOnInit() {
    this.flightService.getFlights().subscribe(p => {
      this.flightService.flights.next(p);
      this.shirts = this.flightPointsPipe.transform(this.flights);
      console.log(this.shirts);
    });
  }

}
