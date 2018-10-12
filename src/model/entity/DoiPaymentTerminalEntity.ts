'use strict';

import { BasicEntity } from './BasicEntity';
import { UIConstant } from './../../constants/UIConstant';
import { DoiLocation } from './../doi/DoiLocation';

export class DoiPaymentTerminalEntity extends BasicEntity {
        
    public type : string;
    public serviceProvider : string;
    public owner : string;
    public model : string;
    public location : string;
    
    public originId : string
    public orgUnitId : number;
    public domain : string;
    
    public version : number;
    
    public arrayOfLocations : DoiLocation[];   
    
    constructor() {
        super();
        this.idxTypeOfEntity=UIConstant.PAYMENTTERM_DOI_IDX; 
    }
    
    public getFormDefinition() {
        let formDef : {label : string, field : string}[] =
            [
                {"label" : "form.paymentterm.originId", "field" : "originId"},  
                {"label" : "form.paymentterm.type", "field" : "type"}
            ]
        ;
        return formDef;
    }
    
    public getFormattedFullName() : string {
        if (this.type != null)
            return this.type;
        else
            return "";
    }
    
    public getPopupDisplay() : string {
        return this.getFormattedFullName();
    }
    
    private setLatLong() : void {
        if (this.arrayOfLocations != null) {
            if (this.arrayOfLocations.length > 0) {
                let tmpLoc:DoiLocation = this.arrayOfLocations[0] as DoiLocation;
                if (tmpLoc!=null) {
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