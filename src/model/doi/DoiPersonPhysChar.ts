'use strict';

import { DoiBaseInfo } from './DoiBaseInfo';
import { Country } from './../lookup/Country';
import { BusinessCode } from './../lookup/BusinessCode';
import { Occupation } from './../lookup/Occupation';

export class DoiPersonPhysChar extends DoiBaseInfo {
   
    public uid : string;
    public uidTbl : string;   
    public title : string;
    public honararyTitle : string;
    public nameSuffix : string;
    public postNominalLetters : string;
    public etnicOrigin : string;
    public relBelief : string;
    
    public nationality : string;
    public nationalityCountry : Country;
    
    public languages : string;
    public educationSkills : string;
    
    public activityCode : string;
    public activityCodeObj : Occupation;
    
    public businessCode : string;
    public businessCodeObj : BusinessCode;
    
    public profOccupation : string;
    public profOccupationObj : Occupation;
    
    public maritalStatus : string;
    
    public originId : string;
    public orgUnitId : number;
    public listId : string;
    
    public height : string;
    public weight : number;
    public buildId : string;
    public hairColourId : string;
    public leftEyeColourId : string;
    public rightEyeColourId : string;
    
    public scars : string;
    public tatoo : string;
    
    public age : number;
    
    public additionalInfo : string;
    public placeOfBirth : string;
    public dob : Date;
    
    public version : number;    
    
    constructor() {
        super(); 
    }
    
    public toString() : string {
        let strDisp : string = "";
        
        if (this.title != null)
            strDisp += this.title + "\n";
        
        if (this.honararyTitle != null)
            strDisp += this.honararyTitle + "\n";
        
        if (this.nameSuffix != null)
            strDisp += this.nameSuffix + "\n";
        
        if (this.postNominalLetters != null)
            strDisp += this.postNominalLetters + "\n";
        
        if (this.profOccupation != null)
            strDisp += this.profOccupation + "\n";
        
        return strDisp;
    }
        
    public getFormattedFullName() : string {
        return this.toString();
    }
}