'use strict';

import { BasicEntity } from './BasicEntity';
import { UIConstant } from './../../constants/UIConstant'

//Is the implement interface really worth in ts ?
export class DoiAirCraftEntity extends BasicEntity {
    
    public registration : string;
    public callSignPrefix : string;
    public registrationSuffix : string;
    public manufacturer : string;
    public model : string;
    public registrationDate : Date;
        
    public originId : string;
    public orgUnitId : number;

    public version : number;
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.AIRCRAFT_DOI_IDX; 
    }
    
    public getFormDefinition() {
        let formDef : {label : string , field : string }[] = 
            [
                {label:"form.doiaircreaft.registration", field:"registration"},
                {label:"form.doiaircreaft.model", field:"model"}
            ]
        ;
        return formDef;
    }
        
    public getFormattedFullName() : string {
        let str : string = "";
        if (this.manufacturer != null)
            str += this.manufacturer.toUpperCase();
        if (this.model != null)
            str += ", " + this.model; 
        return str;  
    }    
    
}