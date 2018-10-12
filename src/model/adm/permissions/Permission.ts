'use strict';

export class Permission {

    public id : number;
    public parentId : number;
    public name : string;
    public description : string;
    public active : boolean;
    public deleted : boolean;
    public read : boolean;
    public write : boolean;
    public creationDate : Date;
    
    constructor(id: number=0) {
        this.id = id;
    }    
}