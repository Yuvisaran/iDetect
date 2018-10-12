'use strict';

import { UIConstant } from './../../constants/UIConstant';
import { BasicEntity } from './BasicEntity';
import { DoiRisk } from './../doi/DoiRisk';

export class DoiInsurancePolicyEntity extends BasicEntity {
    
    public name : string;
    public description : string;
    
    public type : string;
    public issueDate : Date;
    
    public globalScore : number;
    public coverageValue : number;
    
    public originId : string;
    
    public arrayOfRisks : DoiRisk[];
    
    public version : number;    
    
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.INSURANCEPOLICY_DOI_IDX; 
    }
    
    public getFormDefinition() {
        let formDef : {label : string, field : string}[] = 
            [
                {label:"form.doiinsurance.name", field:"name"},
                {label:"form.doiinsurance.description", field:"description"}
            ]
        ;
        return formDef;
    }
    
    public getFormattedFullName() : string {
        if (this.originId!=null) {
            return this.originId;
        } else if (this.name!=null) {
            return this.name;
        } else {
            return "";
        }
    }
    
    public getPopupDisplay() : string {
        return this.getFormattedFullName();
    }    
}