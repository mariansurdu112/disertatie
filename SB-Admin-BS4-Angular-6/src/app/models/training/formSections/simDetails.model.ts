export class SimulatorDetails {
    Id: number;
    TimeStart: Date;
    TimeFinish: Date;
    DownTime: Date;
    Remarks: string;

    constructor(Id: number,
    TimeStart: Date,
    TimeFinish: Date,
    DownTime: Date,
    Remarks: string) {
        this.Id = Id;
        this.TimeStart = TimeStart;
        this.TimeFinish = TimeFinish;
        this.DownTime = DownTime;
        this.Remarks = Remarks;
    }
}
