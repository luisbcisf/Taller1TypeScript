export class Serie{
    constructor(public id:number,public name:String,public channel:String,public seasons:number,public description:String,public link:string,public image:String){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
    
}