export class Social {
    instagram: string | undefined = "instagram";
    facebook: string | undefined = "facebook";
    patreon: string | undefined = "patreon";
    twitter: string | undefined = "twitter";
    constructor(instagram?: string, facebook?: string, patreon?: string, twitter?: string){
        this.instagram = instagram;
        this.facebook = facebook;
        this.patreon = patreon;
        this.twitter = twitter;
    }
}