'use strict';

export class OrgUnit {
    
    public id : number;
    public description : string;
    public name : string;
    public code : string;
    public parents : OrgUnit[];
    public children : OrgUnit[];
    public deleted : boolean;

    public associatedBIC : string;
    public associatedCurrency : string;       
    
    constructor(description: string, name: string, code: string) {
        this.description = description;
        this.name = name;
        this.code = code;
    }
    
}