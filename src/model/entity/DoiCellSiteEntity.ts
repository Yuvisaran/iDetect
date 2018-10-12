'use strict';

import { UIConstant } from './../../constants/UIConstant';
import { BasicEntity } from './BasicEntity';
import { DoiLocation } from './../doi/DoiLocation';

export class DoiCellSiteEntity extends BasicEntity {
   
    public description : string;
    public cid : string;
    public lac : string;
    public mnc : string;
    public mcc : string;
    
    public originId : string;
    public arrayOfLocations : DoiLocation[];
            
    public version:Number; 
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.CELLSITE_DOI_IDX;
        this.imageStatus = 1222;
        this._latitude = -1;
        this._longitude = -1;
    }
    
    //TODO could be a constant maybe move it to constant file
    public getFormDefinition() {
        let formDef : {label : string , field : string }[] = [
            {"label" : "form.doicellsite.description", "field" : "description"}
        ];
        return formDef;
    }
    
    public getFormattedFullName() : string {
        if (this.originId!=null)
            return this.originId;
        if (this.description!=null)
            return this.description;
        return "";
    }
    
    public getPopupDisplay() : string {
        return this.getFormattedFullName();
    }
    
    private setLatLong() : void {
        if (this.arrayOfLocations != null) {
            if (this.arrayOfLocations.length > 0) {
                let tmpLoc:DoiLocation = this.arrayOfLocations[0] as DoiLocation;
                if (tmpLoc != null) {
                    this._longitude = tmpLoc.longitude;
                    this._latitude = tmpLoc.latitude;
                }           
            }
        }
    }
    
    public get longitude() : number {
        if (this._longitude==-1) 
            this.setLatLong();
        
        return this._longitude;
    }
    
    public get latitude() : number {
        if (this._latitude==-1) 
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