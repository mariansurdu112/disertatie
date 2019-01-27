import { CompanyFlights } from './../../models/companyflights.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flightPoints'
})
export class FlightPointsPipe implements PipeTransform {
  dataFinal: string[];
  transform(value: CompanyFlights[], args?: any): string[] {
    this.dataFinal = value.map(r => {
      return `[${r.Id}]${r.IataDep}->${r.IataArr}`;
    });
    return this.dataFinal;
  }

}
