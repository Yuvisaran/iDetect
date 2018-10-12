'use strict';

import { OrgUnit } from './../adm/orgunit/OrgUnit';

export class BasicEntity {
  
    // Only for UI
    public idxTypeOfEntity : number; // Constant for the type of entity (UIConstant)
    public id : number; // Position on the ClientArrayCollection for the GUI
    public revision : number;     
    public deleted : boolean;
    public atomId : number;
    
    public readOnly : boolean; 
    public ui_id : number;
    public savedOnce : boolean;
    public imageStatus : number;
    
    public listOfRevisions: string[];
     
    // Data Info
    public createdBy : string;
    public createdOn : Date;
    public updatedOn : Date;
    public updatedBy : String;
    
    public startDate : Date;
    public endDate : Date;
    
    public ownedBy : string;
    
    public uid : string;  // uid from database
    public orgUnit: OrgUnit;
    public listId : string;
    
    public sourceOfData : string;
    public formattedFullName : string;
    
    public _amountOfTimeReaded : number;
     
    public txt1 : string;
    public txt2 : string;
    public userNumber1 : number;
    public userDate1 : Date;
    
    // Reconciliated Entities
    public sameEntitiesUid : String[];
    
    // Check Result for all entities
    public alertCheckResult : BasicEntity[];
    
    public searchTerms : string[];
    
    public scoreMatchResult : number;     
    public scoreMatchInformation : string;
    
    // Geospatial (all entity must be geolocalisable)
    public _longitude : number;
    public _latitude : number;    

    constructor() {
       	this.readOnly = false;
        this.deleted = false;
		this.atomId = -1;
		this.ui_id = -1;
		this.id = -1;
		this.revision = -1;
		this._latitude = -1;
		this._longitude = -1; 
    }  
    
    public getFormattedFullName() : string {
            if (this.formattedFullName != null)
                return this.formattedFullName;
            return "empty name";
    } 
    
    /*
    public getPopupDisplay() : string {
        return "";
    }
        
    public getFormDefinition() : any {
        return null;
    }*/
    
    //TODO get rid of the getter and setter that just return a value with no logic, normally we can retrieve the value without the getter defined here
    
    public getNodeTimeReorg() : Date {
        return this.createdOn;
    }
    
    public getLongitude() : number {
        if (this._longitude) {
            return this._longitude
        } else {
            return -1;
        }
    }
    
    public getLatitude() : number {
        return this._latitude;
    }
    
    public setLongitude(inlong : number) : void {
        this._longitude = inlong;
    }
    
    public setLatitude(inlat : number) : void {
        this._latitude = inlat;
    }
    
    public getAmountOfTimeReaded() : number {
        if (this._amountOfTimeReaded) {
            return this._amountOfTimeReaded;
        } else {
            return 0;
        }
    }

    public setAmountOfTimeReaded(inamountOfTimeReaded : number) : void {
        this._amountOfTimeReaded = inamountOfTimeReaded;
    }
    
}