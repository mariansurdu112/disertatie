import {Crew} from './crew.model';
export class License {

    ID: number;
    Crew: Crew;
    Type: string;
    ExpDate: Date;
    constructor(parameters: { options: { ID: number,
        Type: string, ExpDate: Date} }) {
        const options = parameters.options;
        this.ID = options.ID;
        this.Type = options.Type;
        this.ExpDate = options.ExpDate;
    }

}
