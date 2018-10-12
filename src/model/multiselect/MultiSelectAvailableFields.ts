'use strict';

export class MultiSelectAvailableFields {
    
    public id : number;
    public entityId : number;
    public name : string;
    public description : string;
    public descriptionMs : string;
    public category : string;
    public type : string;
    public typeId : number;
    public prefixloc : string;
    public updateAttribute : string;
    public rawAttribute : string;
    public localisation : boolean;    
    public array : boolean;
    
    public value : Object;
    
    public get attribute() : String {
        return this.name;
    }
 
    public get isArray() : Boolean {
        return this.array;
    }
    
    public selected : boolean;
    public MSselected : boolean = false;
    public SSselected : boolean = false;
    public Exportselected : boolean = false;
    public GVselected : boolean = false;
                
    // Specific to map internal list fields (lookups) in MultiSelectAvailableFields
    public readOnly : boolean;
    
        
    constructor() {   
    }
}