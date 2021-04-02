//import { Repos } from '../Repos/Repos';

export class GitUser {
    url: string;
    name: string;
    constructor(response: any) {
        this.url = response.url;
        this.name = response.name;
    }
}