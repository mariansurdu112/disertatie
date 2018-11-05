export class NomRule {

    ID: number;
    Code: string;
    constructor(parameters: { options: { ID: number,
        Code: string} }) {
        const options = parameters.options;
        this.ID = options.ID;
        this.Code = options.Code;
    }

}
