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
    constructor(ID: number, CrewId: number,
        Phone: string, CarrierCode: string , Email: string, CIExpDate: Date, BirthDate: Date, EmPhone: string, EmCarrierCode: string) {
        this.CrewId = CrewId;
        this.ID = ID;
        this.Phone = Phone;
        this.Email = Email;
        this.CarrierCode = CarrierCode;
        this.EmCarrierCode = EmCarrierCode;
        this.CIExpDate = CIExpDate;
        this.BirthDate = BirthDate;
        this.EmPhone = EmPhone;
    }

}
