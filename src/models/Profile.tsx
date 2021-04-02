import { Social } from './Social';

export class Profile {
    email: string = "email";
    social: Social;
    location?: string;
    constructor(email: string, social: Social, location?: string){
        this.email = email;
        this.social = social;
        this.location = location;
    }
}