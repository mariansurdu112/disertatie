export class CandidateDetails {
    Id: number;
    AlphaCode: string;
    Position: string;
    RH: boolean;
    LH: boolean;
    constructor(Id: number,
    AlphaCode: string,
    Position: string,
    RH: boolean,
    LH: boolean) {
        this.Id = Id;
        this.AlphaCode = AlphaCode;
        this.Position = Position;
        this.RH = RH;
        this.LH = LH;
    }
}
