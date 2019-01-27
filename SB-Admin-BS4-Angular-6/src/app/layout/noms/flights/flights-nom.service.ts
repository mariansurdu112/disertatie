import { map } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Flights } from './flights';
import { Injectable } from '@angular/core';
import { CompanyFlights } from '../../../models/companyflights.model';
import { Observable, BehaviorSubject, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FlightsNomService implements Flights {
  getFlightsUrl = `${environment.API_URL}api/companyflights`;
  flights: Subject<CompanyFlights[]> = new BehaviorSubject<CompanyFlights[]>(null);

  addFlight(): void {
    throw new Error('Method not implemented.');
  }
  removeFlight(): void {
    throw new Error('Method not implemented.');
  }
  getFlights(): Observable<any> {
    return this.http.get(this.getFlightsUrl);
  }

  changeFlight(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
}
