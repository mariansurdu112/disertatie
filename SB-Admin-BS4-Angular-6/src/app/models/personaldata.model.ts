export class PersonalData {

    ID: number;
    CrewId: number;
    Phone: string;
    CarrierCode: string;
    Email: string;
    CIExpDate: Date;
    BirthDate: Date;
    EmPhone: string;
    EmCarrierCode: string;
    constructor(parameters: { options: { ID: number, CrewId: number,
        Phone: string; CarrierCode: string , Email: string, CIExpDate: Date, BirthDate: Date, EmPhone: string, EmCarrierCode: string } }) {
        const options = parameters.options;
        this.CrewId = options.CrewId;
        this.ID = options.ID;
        this.Phone = options.Phone;
        this.Email = options.Email;
        this.CarrierCode = options.CarrierCode;
        this.EmCarrierCode = options.EmCarrierCode;
        this.CIExpDate = options.CIExpDate;
        this.BirthDate = options.BirthDate;
        this.EmPhone = options.EmPhone;
    }

}
