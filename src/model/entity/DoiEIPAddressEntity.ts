'use strict';

import { BasicEntity } from './BasicEntity';
import { UIConstant } from './../../constants/UIConstant';
import { DoiLocation } from './../doi/DoiLocation';
import { DoiRisk } from './../doi/DoiRisk';

export class DoiEIPAddressEntity extends BasicEntity {
   
    public ipAddress : string;
            
    public description : string;
    public originId : string;
    public arrayOfLocations : Array<DoiLocation>;
    public arrayOfRisks : Array<DoiRisk>;    
    
    public version : number;
        
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.IPADDRESS_DOI_IDX; 
        this.imageStatus = 1302;
        this._latitude = -1;
        this._longitude = -1;
    }
    
    //TODO could be a constant maybe move it to constant file
    public getFormDefinition() {
        let formDef : {label : string , field : string }[] = [
            {"label" : "form.doiipaddr.ipaddr", "field" : "ipAddress"},
            {"label" : "form.doicellsite.description", "field" : "description"}
        ];
        return formDef;
    }
    
    public getFormattedFullName() : string {
        if (this.originId != null)
            return this.originId;
        if (this.description != null)
            return this.description;
        if (this.ipAddress != null)
            return this.ipAddress;
        return "";
    }
    
    public getPopupDisplay() : string {
        return this.getFormattedFullName();
    }
    
    private setLatLong() : void {
        if (this.arrayOfLocations != null) {
            if (this.arrayOfLocations.length > 0) {
                let tmpLoc : DoiLocation = this.arrayOfLocations[0] as DoiLocation;
                if (tmpLoc != null) {
                    this._longitude = tmpLoc.longitude;
                    this._latitude = tmpLoc.latitude;
                }           
            }
        }
    }
    
    public get longitude() : number {
        if (this._longitude == -1) 
            this.setLatLong();
        
        return this._longitude;
    }
    
    public get latitude() : number {
        if (this._latitude == -1) 
            this.setLatLong();
        
        return this._latitude;
    }
    
    public set longitude(inlong : number) {
        this._longitude = inlong;
    }
    
    public set latitude(inlat : number) {
        this._latitude = inlat;
    }    
}