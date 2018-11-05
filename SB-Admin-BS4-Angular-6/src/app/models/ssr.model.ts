export class SSR {

    Id: number;
    SSRCode: string;
    No: number;
    FlightId: number;
    constructor(parameters: { options: {  Id: number,
        SSRCode: string,
        No: number,
        FlightId: number} }) {
        const options = parameters.options;
        this.Id = options.Id;
        this.SSRCode = options.SSRCode;
        this.No = options.No;
        this.FlightId = options.FlightId;
    }

}
