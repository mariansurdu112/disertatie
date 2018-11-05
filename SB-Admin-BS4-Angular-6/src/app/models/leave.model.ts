export class Leave {

    Id: number;
    Type: string;
    Start: Date;
    End: Date;
    Remarks: string;
    constructor(parameters: { options: {  Id: number,
        Type: string,
        Start: Date,
        End: Date,
        Passed: boolean,
        Location: string,
        Remarks: string} }) {
        const options = parameters.options;
        this.Id = options.Id;
        this.Type = options.Type;
        this.Start = options.Start;
        this.End = options.End;
        this.Remarks = options.Remarks;
    }

}
