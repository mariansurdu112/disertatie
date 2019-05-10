export class Exercise {
    Id: number;
    Name: string;
    U: boolean;
    M: boolean;
    S: boolean;
    A: boolean;
    Comment: string;
    constructor(Id: number,
    Name: string,
    U: boolean,
    M: boolean,
    S: boolean,
    A: boolean,
    Comment: string) {
        this.Id = Id;
        this.Name = Name;
        this.U = U;
        this.M = M;
        this.S = S;
        this.A = A;
        this.Comment = Comment;
    }
}
