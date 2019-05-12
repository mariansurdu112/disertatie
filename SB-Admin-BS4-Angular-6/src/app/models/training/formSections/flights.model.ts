export class Flight {
    Id: number;
    From: string;
    To: string;
    TakeOff: Date;
    Arrival: Date;
    Passed: boolean;
    constructor( Id: number,
    From: string,
    To: string,
    TakeOff: Date,
    Arrival: Date,
    Passed: boolean)   {
        this.Id = Id;
        this.From = From;
        this.To = To;
        this.TakeOff = TakeOff;
        this.Arrival = Arrival;
        this.Passed = Passed;

}
}