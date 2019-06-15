import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentsService {
    host = environment.API_URL;
    resourceOrders = 'api/shipments';
    resourcePartnumbers = 'api/PartNumbers';
    resourceGetAircrafts = 'api/NomAircrafts';
    resourceCritical = 'api/critical';
    resourceAckTech = 'api/acktech';
    resourceAckLog = 'api/acklog';
    httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
            })
    };

    constructor(private http: HttpClient) { }

    markOrderCritical(data: any) {
        return this.http.post(this.host + this.resourceCritical, data, this.httpOptions);
    }

    markAckTech(data: any) {
        return this.http.post(this.host + this.resourceAckTech, data, this.httpOptions);
    }

    markAckLog(data: any) {
        return this.http.post(this.host + this.resourceAckLog, data, this.httpOptions);
    }

    getPartNumbers(): Observable<any> {
        return this.http.get(this.host + this.resourcePartnumbers, this.httpOptions);
    }

    getAircrafts(): Observable<any> {
        return this.http.get(this.host + this.resourceGetAircrafts, this.httpOptions);
    }

    getOrders(): Observable<any> {
        return this.http.get(this.host + this.resourceOrders, this.httpOptions);
    }

    updateOrders(data: any): Observable<any> {
        return this.http.put(this.host + this.resourceOrders + '/' + data.Id, data, this.httpOptions);
    }

    removeOrder(data: any): Observable<any> {
        return this.http.delete(this.host + this.resourceOrders + '/' + data.Id, this.httpOptions);
    }

    addOrder(data: any): Observable<any> {
        return this.http.post(this.host + this.resourceOrders, data, this.httpOptions);
    }

}
