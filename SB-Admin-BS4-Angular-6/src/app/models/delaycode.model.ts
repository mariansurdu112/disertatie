export class Delaycode {
    ID: number;
   DelayCode: string;
    constructor(parameters: { options: { ID: number,
        DelayCode: string} }) {
        const options = parameters.options;
        this.ID = options.ID;
        this.DelayCode = options.DelayCode;
    }
}
