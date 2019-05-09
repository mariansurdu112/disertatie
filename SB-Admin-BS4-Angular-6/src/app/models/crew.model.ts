import {PersonalData} from './personaldata.model';
export class Crew {
    ID: number;
    Firstname: string;
    Lastname: string;
    Alphacode: string;
    Sex: string;
    PersonalData: PersonalData;
    constructor(ID: number,
    Firstname: string, Lastname: string , Alphacode: string, Sex: string, PersonalDatas: PersonalData) {

        this.Firstname = Firstname;
        this.ID = ID;
        this.Lastname = Lastname;
        this.Alphacode = Alphacode;
        this.Sex = Sex;
        this.PersonalData = PersonalDatas;
    }
}
