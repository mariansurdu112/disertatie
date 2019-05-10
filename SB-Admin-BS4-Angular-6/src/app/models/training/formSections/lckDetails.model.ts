export class LineCheckDetails {
    Id: number;
    Annual: boolean;
    OperatorConversion: boolean;
    InistialTypeRating: boolean;
    AcRegistration: boolean;
    Remarks: string;

    constructor(Id: number,
                Annual: boolean,
                OperatorConversion: boolean,
                InistialTypeRating: boolean,
                AcRegistration: boolean,
                Remarks: string) {
        this.Id = Id;
        this.Annual = Annual;
        this.OperatorConversion = OperatorConversion;
        this.InistialTypeRating = InistialTypeRating;
        this.AcRegistration = AcRegistration;
        this.Remarks = Remarks;
    }
}
