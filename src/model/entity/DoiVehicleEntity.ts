'use strict';

import { UIConstant } from './../../constants/UIConstant';
import { BasicEntity } from './BasicEntity';
import { Country } from './../lookup/Country';

export class DoiVehicleEntity extends BasicEntity {
       
    public vehicleType : string;
    public type : string;
    public maker : string;
    public vin : string;
    public licensePlate : string;
    public color : string;
    public countryOfRegsitration : Country;
    
    public originId : string;
    public orgUnitId : number;
    
    public version : number;
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.VEHICLE_DOI_IDX;
    }
    
    public getFormDefinition() : {label : string, field : string}[] {
        let formDef : {label : string, field : string}[] = 
            [
                {"label" : "form.doivehicle.vehicleType", "field" : "vehicleType"},
                {"label" : "form.doivehicle.licensePlate", "field" : "licensePlate"}                    
            ]
        ;
        return formDef;
    }
    
    public getFormattedFullName() : string {
        let str : string = "";
        if (this.maker != null)
            str += this.maker.toUpperCase();
        if (this.type != null)
            str += ", " + this.type; 
        return str;
    }
    
    public getPopupDisplay() : string {
        return this.getFormattedFullName(); 
    }    
}