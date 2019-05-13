export class FormDataSheet {
    FormType: string;
    Date: Date;
    Instructor: string;
    InstructorType: string;
    Sectors: number;
    Comments: string;
    constructor(FormType: string,
        Date: Date,
        Instructor: string,
        InstructorType: string,
        Sectors: number,
                Comments: string) {
        this.FormType = FormType;
        this.Date = Date;
        this.Instructor = Instructor;
        this.InstructorType = InstructorType;
        this.Sectors = Sectors;
        this.Comments = Comments;

    }
}
