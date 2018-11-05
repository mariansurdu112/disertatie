import {NomActivity} from './nomactivity.model';
import {Flight} from './flight.model';
import {Other} from './other.model';
import {Leave} from './leave.model';
import {GroundCourse} from './groundcourse.model';
import {Rest} from './rest.model';
import {Positioning} from './positioning.model';
import {Crew} from './crew.model';
export class Assignment {

    Id: number;
    StartTime: Date;
    EndTime: Date;
    Activity: NomActivity;
    Flight: Flight;
    Other: Other;
    Leave: Leave;
    GroundCourse: GroundCourse;
    Rest: Rest;
    Positioning: Positioning;
    Crew: Crew;
    CreatedBy: string;
    AsgActif: boolean;
    LastUpdate: Date;

    constructor(parameters: { options: { Id: number,
        StartTime: Date,
        EndTime: Date,
        Activity: NomActivity,
        Flight: Flight,
        Other: Other,
        Leave: Leave,
        GroundCourse: GroundCourse,
        Rest: Rest,
        Positioning: Positioning,
        Crew: Crew,
        CreatedBy: string,
        AsgActif: boolean,
        LastUpdate: Date} }) {
        const options = parameters.options;
        this.Id = options.Id;
        this.StartTime = options.StartTime;
        this.EndTime = options.EndTime;
        this.Activity = options.Activity;
        this.Flight = options.Flight;
        this.Other = options.Other;
        this.Leave = options.Leave;
        this.GroundCourse = options.GroundCourse;
        this.Rest = options.Rest;
        this.Positioning = options.Positioning;
        this.Crew = options.Crew;
        this.CreatedBy = options.CreatedBy;
        this.AsgActif = options.AsgActif;
        this.LastUpdate = options.LastUpdate;
    }
}
