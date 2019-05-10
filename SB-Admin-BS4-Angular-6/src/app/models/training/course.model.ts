import {MockupForm} from './mockform.model';
import {SimulatorForm} from './simform.model';
import {FlightForm} from './fltform.model';
import {LineCheckForm} from './lckform.model';

export class Course {
    Id: number;
    Firstname: string;
    Lastname: string;
    CourseName: string;
    Date: Date;
    GeneratedBy: string;
    MockupForms: Array<MockupForm>;
    SimulatorForms: Array<SimulatorForm>;
    FlightForms: Array<FlightForm>;
    LineCheckForms: Array<LineCheckForm>;
    constructor(Id: number,
    Firstname: string,
    Lastname: string,
    CourseName: string,
    Date: Date,
    GeneratedBy: string,
    MockupForms: Array<MockupForm>,
    SimulatorForms: Array<SimulatorForm>,
    FlightForms: Array<FlightForm>,
    LineCheckForms: Array<LineCheckForm>) {
        this.Id = Id;
        this.Firstname = Firstname;
        this.Lastname = Lastname;
        this.CourseName = CourseName;
        this.Date = Date;
        this.GeneratedBy = GeneratedBy;
        this.MockupForms = MockupForms;
        this.SimulatorForms = SimulatorForms;
        this.FlightForms = FlightForms;
        this.LineCheckForms = LineCheckForms;
    }

}
