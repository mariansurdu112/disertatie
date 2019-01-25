export class User {

    Id: number;
    Email: string;
    Name: string;
    Role: string;
    constructor(
            Id: number,
            Email: string,
            Name: string,
            Role: string
    ) {
        this.Id = Id;
        this.Email = Email;
        this.Name = Name;
        this.Role = Role;
    }
}
