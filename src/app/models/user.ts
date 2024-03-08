export class User{
    email: string;
    password: string;
    role: string;

    constructor(email:string, passowrd:string, role:string){
        this.email = email;
        this.password = passowrd;
        this.role = role;
    }
}