'use strict';

import { RelationShipType } from './../st/RelationShipType';

export class FieldDescription {
 
    public ui_id : number;
    public id : number;
    public description : string;
    public typeOfEntity : number; 
    public hibernateName : string;
    public type : string;
    public allowDecimal : number;
    
    public operator : string; 
    public dataType : string;
    public algorithmPercent : number;
    public algorithm : string;
    public mandatory : boolean;
     
    public value : string;
    public valueTo : string;
    public otherFieldcondition : string;
    public toBeTranslated : boolean;
    public translateFrom : string;
    public translateTo : string;
    
    public uidIcons : string;     
    public relationShipType : RelationShipType;
    
    public deleteStatus : boolean;
    public viewable : boolean;
    public searchAble : boolean;
    public importable : boolean;
    public exportable : boolean=true;
    public readOnly : boolean;
    public forEditing : boolean;
    public arrayOfValue : boolean;
    public arrayOfException : string[];
    public arrayOfPossibilities : string[];
    
    public descriptionUI : string;
    
    public triImportable : number;
    public triViewable : number;    
    
    constructor() {
        this.toBeTranslated = false;
        this.arrayOfException = [];
        this.arrayOfPossibilities = [];    
    }
    
    public getNotNullValue() : string {
        if (this.value != null) {
            return this.value;
        } else {
            return "";
        }           
    }
        
    public equals(inField:FieldDescription) : boolean {
        if (this.id != inField.id) {
            return false;
        } else {
            return true;
        }
    }
     
    
    public toString() : string {
    
        if (this.descriptionUI != null) {
            return this.descriptionUI;
        } else {
            let str : string = "";
            
            if (this.description != null) {
                str += this.description + " ";
            }
            
            if (this.algorithm != null) {
                str += this.algorithm + " ";
            }
            
            if (this.value != null) {
                str += this.value + " ";
            }
            
            if (this.valueTo != null) {
                str += this.valueTo + " ";
            }
            
            return str;
        }
    }
    
}