import {CandidateDetails} from './formSections/candDet.model';
import {InstructorResult} from './formSections/instructorResult.model';
import {Exercise} from './formSections/exercises.model';
import {Flight} from './formSections/flights.model';
import {RemedialTraining} from './formSections/remedialTraining.model';
import {UpgradeRecomandation} from './formSections/upgradeRec.model';
import {SimulatorSetup} from './formSections/simSetup.model';
import {SimulatorDetails} from './formSections/simDetails.model';

export class SimulatorForm {
    ID: number;
    FormType: string;
    Date: Date;
    Instructor: string;
    InstructorType: string;
    Device: string;
    Location: string;
    Passed: boolean;
    CandidateDetails: CandidateDetails;
    InstructorResult: InstructorResult;
    Exercises: Array<Exercise>;
    SimulatorDetails: SimulatorDetails;
    SimulatorSetup: SimulatorSetup;
    RemedialTraining: RemedialTraining;
    UpgradeRecomandation: UpgradeRecomandation
    constructor(ID: number,
                FormType: string, Date: Date , Instructor: string, InstructorType: string, Device: string,
                Location: string, Passed: boolean,
                CandidateDetailsData: CandidateDetails,
                InstructorResultData: InstructorResult,
                ExercisesData: Array<Exercise>,
                SimulatorDetailsData: SimulatorDetails,
                SimulatorSetupData: SimulatorSetup,
                RemedialTrainingData: RemedialTraining,
                UpgradeRecomandationData: UpgradeRecomandation) {

        this.FormType = FormType;
        this.ID = ID;
        this.Date = Date;
        this.Instructor = Instructor;
        this.InstructorType = InstructorType;
        this.Location = Location;
        this.Device = Device;
        this.Passed = Passed;
        this.CandidateDetails = CandidateDetailsData;
        this.InstructorResult = InstructorResultData;
        this.Exercises = ExercisesData;
        this.SimulatorDetails = SimulatorDetailsData;
        this.SimulatorSetup = SimulatorSetupData;
        this.RemedialTraining = RemedialTrainingData;
        this.UpgradeRecomandation = UpgradeRecomandationData;
    }
}
