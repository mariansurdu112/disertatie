export class NomActivity {
    ID: number;
    Type: string;
    Code: string;
    constructor(parameters: { options: { ID: number; Type: string; Code: string } }) {
        const options = parameters.options;
        this.Code = options.Code;
        this.ID = options.ID;
        this.Type = options.Type;
    }
}
