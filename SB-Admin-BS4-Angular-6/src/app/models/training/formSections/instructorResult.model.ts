export class InstructorResult {
    Id: number;
    Instructor: string;
    InstructorType: string;
    Date: Date;
    Passed: boolean;

    constructor(Id: number,
                Instructor: string,
                InstructorType: string,
                Passed: boolean,
                Date: Date) {
        this.Id = Id;
        this.Instructor = Instructor;
        this.InstructorType = InstructorType;
        this.Passed = Passed;
        this.Date = Date;
    }
}
