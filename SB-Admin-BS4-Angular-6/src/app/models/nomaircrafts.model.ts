export class NomAircrafts {

    ID: number;
    AircraftName: string;
    RegistrationNumber: string;
    IataGroup: string;
    Seats: number;
    PoolId: number;
    Owner: string;
    RegNo: string;
    constructor(parameters: { options: { ID: number; AircraftName: string; IataGroup: string,
    Seats: number, PoolId: number, Owner: string, RegNo: string} }) {
        const options = parameters.options;
        this.ID = options.ID;
        this.AircraftName = options.AircraftName;
        this.RegistrationNumber = options.RegNo;
        this.IataGroup = options.IataGroup;
        this.Seats = options.Seats;
        this.PoolId = options.PoolId;
        this.Owner = options.Owner;
        this.RegNo = options.RegNo;
    }

}
