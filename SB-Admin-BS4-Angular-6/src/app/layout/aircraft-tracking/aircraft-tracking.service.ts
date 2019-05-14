import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AircraftTrackingService {
     httpOptions = {
        headers: new HttpHeaders(
            { 'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Postman-Token': 'dd150b11-1769-49f2-81e3-4926463f183f'

            })
    };
    urlFlightRadar = 'http://data-live.flightradar24.com/zones/fcgi/feed.js';
    constructor(private http: HttpClient) { }

    getData(bounds: any, params: any): Observable<any> {
        this.urlFlightRadar = 'https://data-live.flightradar24.com/zones/fcgi/feed.js?bounds=' + bounds +
            '&faa=1&mlat=1&flarm=1&adsb=1&gnd=1&air=1&vehicles=1&estimated=1&maxage=7200&gliders=1&stats=1&callsign=KLM';
        return this.http.get(this.urlFlightRadar, this.httpOptions);
    }
}
