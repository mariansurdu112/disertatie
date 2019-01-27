import { CompanyFlights } from './../../../models/companyflights.model';
import { Observable } from 'rxjs';
export interface Flights {
    addFlight(): void;
    removeFlight(): void;
    getFlights(): Observable<Array<CompanyFlights>>;
    changeFlight(): void;
}
