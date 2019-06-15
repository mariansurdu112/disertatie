import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NomsService {

    host = environment.API_URL;
    resource = 'api/NomAirports';
    resourceActivity = 'api/nomActivities';
    resourcePositions = 'api/NomPositions'
    resourceRules = 'api/nomRules';
    resourceCrewPositions = 'api/crewPositions';
    resourceAircrafts = 'api/nomAircrafts';
    resourceCourses = 'api/NomCourses/';
    resourceMockupForms = 'api/NomMockupForms';
    resourceFlightForms = 'api/NomFlightForms';
    resourceSimulatorForms = 'api/NomSimulatorForms';
    resourceLineCheckForms = 'api/NomLineCheckForms';


    httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
            })
    };
    constructor(private http: HttpClient) { }
    getMockupForms(): Observable<any> {
        return this.http.get(this.host + this.resourceMockupForms, this.httpOptions);
    }

    updateMockupForms(data: any): Observable<any> {
        return this.http.put(this.host + this.resourceMockupForms + '/' + data.Id, data, this.httpOptions);
    }


    removeMockupForms(data: any): Observable<any> {
        return this.http.delete(this.host + this.resourceMockupForms + '/' + data.Id, this.httpOptions);
    }
    addMockupForms(data: any): Observable<any> {
        return this.http.post(this.host + this.resourceMockupForms + '/' + data.Id, data, this.httpOptions);
    }

    // positions

    getPositions(): Observable<any> {
        return this.http.get(this.host + this.resourcePositions, this.httpOptions);
    }

    updatePosition(data: any): Observable<any> {
        return this.http.put(this.host + this.resourcePositions + '/' + data.Id, data, this.httpOptions);
    }

    // rules
    getRules(): Observable<any> {
        return this.http.get(this.host + this.resourceRules, this.httpOptions);
    }

    updateRule(data: any): Observable<any> {
        return this.http.put(this.host + this.resourceRules + '/' + data.Id, data, this.httpOptions);
    }

    // aircrafts

    getAircrafts(): Observable<any> {
        return this.http.get(this.host + this.resourceAircrafts, this.httpOptions);
    }

    updateAircraft(data: any): Observable<any> {
        return this.http.put(this.host + this.resourceAircrafts + '/' + data.Id, data, this.httpOptions);
    }

    // airports

    getAirports(): Observable<any> {
        return this.http.get(this.host + this.resource, this.httpOptions);
    }

    updateAirport(data: any): Observable<any> {
        return this.http.put(this.host + this.resource + '/' + data.Id, data, this.httpOptions);
    }


    removeAirport(data: any): Observable<any> {
        return this.http.delete(this.host + this.resource + '/' + data.Id, this.httpOptions);
    }
    addAirport(data: any): Observable<any> {
        return this.http.post(this.host + this.resource + '/' + data.Id, data, this.httpOptions);
    }

    getActivities(): Observable<any> {
        return this.http.get(this.host + this.resourceActivity, this.httpOptions);
    }

    updateActivity(data: any): Observable<any> {
        console.log(data);
        return this.http.put(this.host + this.resourceActivity + '/' + data.Id, data, this.httpOptions);
    }


    removeActivity(data: any): Observable<any> {
        return this.http.delete(this.host + this.resourceActivity + '/' + data.Id, this.httpOptions);
    }
    addActivity(data: any): Observable<any> {
        return this.http.post(this.host + this.resourceActivity + '/' + data.Id, data, this.httpOptions);
    }



}
