export class RemedialTraining {
    Id: number;
    ELearning: boolean;
    SelfStudy: boolean;
    LineCheck: boolean;
    CrmTraining: boolean;
    Mockup: number;
    Simulator: number;
    Flight: number;
    LineCheckSessions: number;
    Comments: string;

    constructor(Id: number,
    ELearning: boolean,
    SelfStudy: boolean,
    LineCheck: boolean,
    CrmTraining: boolean,
    Mockup: number,
    Simulator: number,
    Flight: number,
    LineCheckSessions: number,
    Comments: string) {
        this.Id = Id;
        this.ELearning = ELearning;
        this.SelfStudy = SelfStudy;
        this.LineCheck = LineCheck;
        this.CrmTraining = CrmTraining;
        this.Mockup = Mockup;
        this.Simulator = Simulator;
        this.Flight = Flight;
        this.LineCheckSessions = LineCheckSessions;
        this.Comments = Comments;
    }
}
