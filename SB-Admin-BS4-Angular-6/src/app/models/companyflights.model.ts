export class CompanyFlights {
    Id: number;
    From: string;
    To: string;
    IataDep: string;
    IataArr: string;
    RadioCallSign: string;

    constructor(Id: number,
        From: string,
        To: string,
        IataDep: string,
        IataArr: string,
        RadioCallSign: string) {
        this.Id = Id;
        this.From = From;
        this.To = To;
        this.IataDep = IataDep;
        this.IataArr = IataArr;
        this.RadioCallSign = RadioCallSign;
    }

}
