import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AircraftTrackingService {
    dataUrlFlr = environment.API_URL + 'api/getFlightDataFlr';
    httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
            })
    };
   constructor(private http: HttpClient) { }
    getData(bounds: any): Observable<any> {
        return this.http.post(this.dataUrlFlr, bounds);
    }
}
