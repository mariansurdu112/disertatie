export class Rule {

    Id: number;
    Code: string;
    constructor(parameters: { options: {  Id: number,
        Code: string} }) {
        const options = parameters.options;
        this.Id = options.Id;
        this.Code = options.Code;
    }
}
