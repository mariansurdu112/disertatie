export class FormDataSheet {
    FormType: string;
    Date: Date;
    Instructor: string;
    InstructorType: string;
    Sectors: number;
    constructor(FormType: string,
        Date: Date,
        Instructor: string,
        InstructorType: string,
        Sectors: number) {
        this.FormType = FormType;
        this.Date = Date;
        this.Instructor = Instructor;
        this.InstructorType = InstructorType;
        this.Sectors = Sectors;

    }
}
