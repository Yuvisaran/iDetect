'use strict';

import { UIConstant } from './../../constants/UIConstant';
import { BasicEntity } from './BasicEntity';
import { PhoneType } from './../lookup/PhoneType';
import { Country } from './../lookup/Country';
import { DoiImei } from './../doi/DoiImei';
import { DoiImsi } from './../doi/DoiImsi';
import { DoiLocation } from './../doi/DoiLocation';

export class DoiPhoneEntity extends BasicEntity {
   
    public originId : string;
    public phoneIdentifierFull : string;
    public countryPrefix : string;
    public areaPrefix : string;
    public number : string;
    public type : string;
    public typeObj : PhoneType;
    public provider : string;
    public countryId : string;
    public countryObj : Country;
    public version : number;
    public originalPhoneNumber : string;
    
    public arrayOfImeiSize : number;
    
    public arrayOfImei : DoiImei[];
    public arrayOfImsi : DoiImsi[];
    
    public arrayOfLocations : DoiLocation[];
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.PHONE_DOI_IDX; 
    }
    
    public getFormDefinition() {
        let formDef : {label : string, field : string }[] =
            [
                {"label" : "form.doiphone.number", "field" : "number"},
                {"label" : "form.doiphone.type", "field" : "type"}                  
            ]
        ;
        return formDef;
    }
    
    public get typeDescription() : string {
        if (this.typeObj != null) {
            return this.typeObj.type;
        }
        
        return this.type;
    }

    public get countryIso3() : string {
        if (this.countryObj) {
            return this.countryObj.iso3;
        }
        
        return null;
    }
    
    public getFormattedFullName() : string {            
        return this.toString();
    }
    
    public toString() : string {
        if (this.phoneIdentifierFull != null)
            return this.phoneIdentifierFull;
        if (this.number != null)
            return this.number;
        return "";
    }
                
    public getPopupDisplay() : string {
        return this.getFormattedFullName();
    }
    
    public equals(tmpPho : DoiPhoneEntity) : boolean {
        if (tmpPho != null) {
            if (this.toString() != tmpPho.toString()) return false;
        } else {
            return false;
        }
        return true;
    }

    public get longitude() : number {
        if (this._longitude!=-1)
            return this._longitude;
        if (this.arrayOfLocations!=null && this.arrayOfLocations.length > 0)
            return this.arrayOfLocations[0].longitude;
        
        return -1;
    }
    
    public get latitude() : number {
        //trace (this._latitude);
        if (this._latitude != -1)
            return this._latitude;
        if (this.arrayOfLocations != null && this.arrayOfLocations.length > 0)
            return this.arrayOfLocations[0].latitude;
        
        return -1;
    }
    
    public set longitude(inlong : number) {
        this._longitude = inlong;
    }
    
    public set latitude(inlat : number) {
        this._latitude = inlat;
    }
}
