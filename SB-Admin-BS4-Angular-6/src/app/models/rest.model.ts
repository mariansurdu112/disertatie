export class Rest {

    Id: number;
    Start: Date;
    End: Date;
    Remarks: string;
    constructor(parameters: { options: {  Id: number,
        Start: Date,
        End: Date,
        Remarks: string} }) {
        const options = parameters.options;
        this.Id = options.Id;
        this.Start = options.Start;
        this.End = options.End;
        this.Remarks = options.Remarks;
    }

}
