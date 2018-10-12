'use strict';

import { BasicEntity } from './../entity/BasicEntity';
import { Country } from './../lookup/Country';
import { AddressPurpose } from './../lookup/AddressPurpose';
import { DoiEntityComment } from './DoiEntityComment';
import { UIConstant } from './../../constants/UIConstant';

export class DoiLocation extends BasicEntity {
   
    public streetAddress : string;
    public streetAddressNumber : string;
    public buildingName : string;
    public fullStreetAddress : string;
    public zipCode : string;
    public city : string;
    public fullAddressText : string;
    public country : string;                          //ISO3 code of the country for multilanguage issues     
    public originId : string;
    public objCountry : Country;
    public state : string;
    public version : number;
    public orgUnitId : number;
    public poBox : string;
    public primary : number;
    
    public addressPurpose : AddressPurpose;
    public addressPurposeId : string;
    
    public comment : DoiEntityComment;  
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.HOMELOCATION_DOI_IDX;
        this.imageStatus = 1243; 
    }
    
    public getFormDefinition() {
        let formDef: {label : string, field : string}[] = 
            [
                {label:"form.doilocation.streetAddress", field:"streetAddress"},
                {label:"form.doilocation.addressPurpose", field:"addressPurpose"}                   
            ]
        ;
        return formDef;
    }
        
        
    public toString() : string {
        let tmpStr : string = "";
        
        if (this.streetAddressNumber != null)
            tmpStr += this.streetAddressNumber + ",";
        if (this.streetAddress != null)
            tmpStr += this.streetAddress + ", ";
        if (this.city != null)
            tmpStr += this.city + ", ";
        
        if (this.objCountry != null)
            tmpStr += this.objCountry.name ;
        else if (this.country != null)
            tmpStr += this.country;
        
        if (tmpStr.length < 4)
            if (this.fullStreetAddress != null)
                tmpStr = this.fullStreetAddress;
            else if (this.fullAddressText != null)
                tmpStr = this.fullAddressText;   
        return tmpStr;
    }
        
    public getFormattedFullName() : string {
        return this.toString();
    }
    
    public getPopupDisplay() : string {
        return this.toString();
    }
    
    public equals(tmpLoc:DoiLocation) : boolean {
        if (tmpLoc != null) {
            if (this.city != tmpLoc.city) return false;
            if (this.country != tmpLoc.country) return false;
        } else {
            return false;
        }
        return true;
    }
    
    public get longitude() : number {
        return this._longitude;
    }
    
    public get latitude() : number {
        return this._latitude;
    }
        
    public set longitude(inlong : number) {
        this._longitude = inlong;
    }
        
    public set latitude(inlat : number) {
        this._latitude = inlat;
    }    
}