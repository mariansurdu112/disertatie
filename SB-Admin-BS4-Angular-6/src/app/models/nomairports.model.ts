export class NomAirport {

    Id: number;
    Location: string;
    IataCode: string;
    Latitude: string;
    Longitude: string;
    IcaoCode: string;
    Name: string;

    constructor(parameters: { options: {Id: number,  Location: string,
        IataCode: string,
        Latitude: string,
        Longitude: string,
        IcaoCode: string} }) {
        const options = parameters.options;
        this.Id = options.Id;
        this.Location = options.Location;
        this.IataCode = options.IataCode;
        this.Latitude = options.Latitude;
        this.Longitude = options.Longitude;
        this.IcaoCode = options.IcaoCode;
    }

}
