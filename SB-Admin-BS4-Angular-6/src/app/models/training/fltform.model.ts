import {CandidateDetails} from './formSections/candDet.model';
import {InstructorResult} from './formSections/instructorResult.model';
import {Exercise} from './formSections/exercises.model';
import {Flight} from './formSections/flights.model';
import {RemedialTraining} from './formSections/remedialTraining.model';
import {UpgradeRecomandation} from './formSections/upgradeRec.model';

export class FlightForm {
    ID: number;
    FormType: string;
    Date: Date;
    Instructor: string;
    InstructorType: string;
    Sectors: number;
    Passed: boolean;
    CandidateDetails: CandidateDetails;
    InstructorResult: InstructorResult;
    Exercises: Array<Exercise>;
    Flights: Array<Flight>;
    RemedialTraining: RemedialTraining;
    UpgradeRecomandation: UpgradeRecomandation
    constructor(ID: number,
                FormType: string, Date: Date , Instructor: string, InstructorType: string, Sectors: number, Passed: boolean,
    CandidateDetailsData: CandidateDetails,
    InstructorResultData: InstructorResult,
    ExercisesData: Array<Exercise>,
    FlightsData: Array<Flight>,
    RemedialTrainingData: RemedialTraining,
    UpgradeRecomandationData: UpgradeRecomandation) {

        this.FormType = FormType;
        this.ID = ID;
        this.Date = Date;
        this.Instructor = Instructor;
        this.InstructorType = InstructorType;
        this.Sectors = Sectors;
        this.Passed = Passed;
        this.CandidateDetails = CandidateDetailsData;
        this.InstructorResult = InstructorResultData;
        this.Exercises = ExercisesData;
        this.Flights = FlightsData;
        this.RemedialTraining = RemedialTrainingData;
        this.UpgradeRecomandation = UpgradeRecomandationData;
    }
}
