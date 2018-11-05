export class NomPosition {
    ID: number;
    Label: string;
    Code: string;
    constructor(parameters: { options: { ID: number,
        Label: string, Code: string} }) {
        const options = parameters.options;
        this.ID = options.ID;
        this.Label = options.Label;
        this.Code = options.Code;
    }
}
