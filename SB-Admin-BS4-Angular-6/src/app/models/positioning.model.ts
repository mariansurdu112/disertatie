export class Positioning {

    ID: number;
    Start: Date;
    End: Date;
    DepartureTime: Date;
    ArrivalTime: Date;
    From: string;
    To: string;
    Type: string;
    FlightNumber: number;
    constructor(parameters: { options: { ID: number,
        Start: Date,
        End: Date,
        DepartureTime: Date,
        ArrivalTime: Date,
        From: string,
        To: string,
        Type: string,
        FlightNumber: number} }) {
        const options = parameters.options;
        this.ID = options.ID;
        this.Start = options.Start;
        this.End = options.End;
        this.ArrivalTime = options.ArrivalTime;
        this.FlightNumber = options.FlightNumber;
        this.DepartureTime = options.DepartureTime;
        this.From = options.From;
        this.To = options.To;
        this.FlightNumber = options.FlightNumber;
    }

}
