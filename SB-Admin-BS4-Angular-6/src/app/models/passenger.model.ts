export class Passenger {

    Id: number;
    PCode: string;
    No: number;
    FlightId: number;

    constructor(parameters: { options: {  Id: number,
        PCode: string,
        No: number,
        FlightId: number} }) {
        const options = parameters.options;
        this.Id = options.Id;
        this.PCode = options.PCode;
        this.No = options.No;
        this.FlightId = options.FlightId;
    }

}
