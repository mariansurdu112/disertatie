import {NomAircrafts} from './nomaircrafts.model';
export class Flight {

    ID: number;
    ReportingTime: Date;
    TakeOffTime: Date;
    ArrivalTime: Date;
    FlightNumber: string;
    Aircraft: NomAircrafts;
    EstimatedTakeOff: Date;
    EstimatedArrival: Date;
    FlightTime: number;
    constructor(parameters: { options: { ID: number,
        RepTime: Date, TakeOff: Date, ArrTime: Date, FlightNumber: string,
        Aircraft: NomAircrafts, EstTakeOff: Date,
        EstimatedArrival: Date, FlightTime: number} }) {
        const options = parameters.options;
        this.ID = options.ID;
        this.ReportingTime = options.RepTime;
        this.TakeOffTime = options.TakeOff;
        this.ArrivalTime = options.ArrTime;
        this.FlightNumber = options.FlightNumber;
        this.Aircraft = options.Aircraft;
        this.EstimatedTakeOff = options.EstTakeOff;
        this.EstimatedArrival = options.EstimatedArrival;
        this.FlightTime = options.FlightTime;
    }
}
