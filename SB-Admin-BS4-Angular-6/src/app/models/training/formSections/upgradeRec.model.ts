export class UpgradeRecomandation {
    Id: number;
    Yes: boolean;
    No: boolean;
    constructor(Id: number, Yes: boolean, No: boolean) {
        this.Id = Id;
        this.No = No;
        this.Yes = Yes;
    }
}
