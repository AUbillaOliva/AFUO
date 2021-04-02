export class Repos {
    id: number = -1;
    name: string = "";
    description: string = "";
    html_url: string = "";
    language: string = "";
    constructor(response: any) {
        this.id = response.id;
        this.name = response.name;
        this.description = response.description;
        this.html_url = response.html_url;
        this.language = response.languages;
    }
}