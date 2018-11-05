export class GroundCourse {

    Id: number;
    Type: string;
    Start: Date;
    End: Date;
    Passed: boolean;
    Location: string;
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
        this.Passed = options.Passed;
        this.Location = options.Location;
        this.Remarks = options.Remarks;
    }

}
