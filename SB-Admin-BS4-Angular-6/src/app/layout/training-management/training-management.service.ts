import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingManagementService {

    host = environment.API_URL;
    httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
            })
    };
    constructor(private http: HttpClient) { }
    // getData(bounds: any): Observable<any> {
    //     return this.http.post(this.host, bounds);
    // }
}
