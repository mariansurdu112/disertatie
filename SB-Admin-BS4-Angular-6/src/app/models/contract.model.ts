import {Crew} from './crew.model';
export class Contract {
    Id: number;
    CrewId: number;
    Crew: Crew;
    ExpiryDate: Date;
    Implied: number;
    Signed: string;
    EmployeeType: string;
    AcfDomainLicense: string;
    constructor(parameters: { options: {  Id: number,
        CrewId: number,
        Crew: Crew,
        ExpiryDate: Date,
        Implied: number,
        Signed: string,
        EmployeeType: string,
        AcfDomainLicense: string} }) {
        const options = parameters.options;
        this.Id = options.Id;
        this.CrewId = options.CrewId;
        this.Crew = options.Crew;
        this.ExpiryDate = options.ExpiryDate;
        this.Implied = options.Implied;
        this.Signed = options.Signed;
        this.EmployeeType = options.EmployeeType;
        this.AcfDomainLicense = options.AcfDomainLicense;
    }
}
