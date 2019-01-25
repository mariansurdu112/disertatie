export class UserGrants {
    Email: string;
    Password: string;
    Grant: string;
    constructor(
        Email: string,
        Password: string,
        Grant: string
    ) {
        this.Email = Email;
        this.Password = Password;
        this.Grant = Grant;
    }
}
