export class ProjectModel {
    _id: string | undefined = "0";
    title: string = "project_title";
    descriptions: any | undefined;
    url: string | undefined = "";
    date: string | undefined = ""
    images: string[] | undefined;
    tags: string[] | undefined;
    constructor(_id: string, images?: string[], title?: string, desc?: string, url?: string, date?: string, tags?: string[]) {
        this.title = title;
        this.images = images;
        this._id = _id;
        this.descriptions = desc;
        this.url = url;
        this.date = date;
        this.tags = tags;
    }
}