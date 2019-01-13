import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flightSort'
})
export class FlightSortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
