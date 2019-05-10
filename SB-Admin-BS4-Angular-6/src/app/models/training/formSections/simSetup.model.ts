export class SimulatorSetup {
    Id: number;
    FltNo: string;
    From: string;
    To: string;
    SID: string;
    Star: string;
    FlightPlanRouting: string;
    ZFW: string;
    Fuel: number;
    Reserve: number;
    CruiseAltitude: string;
    CgTrim: string;
    CostIndex: number;

    constructor(Id: number,
    FltNo: string,
    From: string,
    To: string,
    SID: string,
    Star: string,
    FlightPlanRouting: string,
    ZFW: string,
    Fuel: number,
    Reserve: number,
    CruiseAltitude: string,
    CgTrim: string,
    CostIndex: number) {
        this.Id = Id;
        this.FltNo = FltNo;
        this.From = From;
        this.To = To;
        this.SID = SID;
        this.Star = Star;
        this.FlightPlanRouting = FlightPlanRouting;
        this.ZFW = ZFW;
        this.Fuel = Fuel;
        this.Reserve = Reserve;
        this.CruiseAltitude = CruiseAltitude;
        this.CgTrim = CgTrim;
        this.CostIndex = CostIndex;
    }
}
