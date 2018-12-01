import {PersonalData} from './personaldata.model';
export class Crew {
    ID: number;
    Firstname: string;
    Lastname: string;
    Alphacode: string;
    Sex: string;
    PersonalData: PersonalData;
    constructor(parameters: { options: { ID: number,
    Firstname: string; Lastname: string , Alphacode: string, Sex: string, PersonalData: PersonalData } }) {
        const options = parameters.options;
        this.Firstname = options.Firstname;
        this.ID = options.ID;
        this.Lastname = options.Lastname;
        this.Alphacode = options.Alphacode;
        this.Sex = options.Sex;
        this.PersonalData = options.PersonalData;
    }
}
