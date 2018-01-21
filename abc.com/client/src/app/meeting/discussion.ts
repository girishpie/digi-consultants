import { Class } from '@angular/core';


export enum TYPE {DISCUSSION = 0, SUB_DISCUSSION=1};
export class Discussion {

    private item:string;
    private text:string;
    private infoActionBy:string;
    //  private subDiscussions:Array<Discussion> = new Array<Discussion>();
    private type : TYPE;
    private parentDiscussion:Discussion;
    private numSubDiscussions : number;
    constructor() {
        this.type = TYPE.DISCUSSION;
        this.numSubDiscussions = 0;
    }

    public getItem():string{
        return this.item;
    }
    public setItem(item:string){
        this.item = item;
    }
    public getText ():string {
        return this.text;
    }

    public setText (text:string) {
        this.text = text;
    }

    public setInfoActionBy(infoActionBy:string){
        this.infoActionBy = infoActionBy;
    }

    public getInfoActionBy():string{
        return this.infoActionBy;
    }
    /* public addSubTopic(discussion:Discussion){
     this.subDiscussions.push(discussion);
     }
     public getSubTopics():Array<Discussion>{
     return this.subDiscussions;
     }
     public setSubDiscussions(subDiscussions:Array<Discussion>){
     this.subDiscussions = subDiscussions;
     }*/

    public setParentDiscussion(parent:Discussion){
        this.parentDiscussion =parent;
        this.type = TYPE.SUB_DISCUSSION;
        parent.incrementSubDiscussions();
    }

    public getParentDiscussion() : Discussion{
        return this.parentDiscussion;
    }
    public getNumSubDiscussions(): number {
        return this.numSubDiscussions;
    }

    public setNumSubDiscussions(numSubDiscussions:number) {
         this.numSubDiscussions = numSubDiscussions;
    }
    public incrementSubDiscussions(){
        this.numSubDiscussions++;
    }

    public getType(){
        return this.type;
    }


}
