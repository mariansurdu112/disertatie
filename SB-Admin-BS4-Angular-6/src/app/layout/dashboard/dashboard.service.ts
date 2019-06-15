import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    host = environment.API_URL;
    resourceFlights = this.host + 'api/Flights';
    httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
            })
    };

    constructor(private http: HttpClient) {
    }

    getFlights(): Observable<any> {
        return this.http.get(this.resourceFlights,this.httpOptions);
    }

    // getData(bounds: any): Observable<any> {
    //     return this.http.post(this.host, bounds);
    // }
}
