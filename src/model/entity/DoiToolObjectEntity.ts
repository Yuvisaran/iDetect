'use strict';

import { UIConstant } from './../../constants/UIConstant';
import { BasicEntity } from './BasicEntity';

export class DoiToolObject extends BasicEntity {
    
    public type : string;
    public maker : string;
    public color : string;
    public description : string;
    
    public originId : string;
    public orgUnitId : number;
    
    public version : number;
    
    constructor() {
        super();
        this.idxTypeOfEntity=UIConstant.TOOLOBJECT_DOI_IDX;         
    }
    
    public getFormDefinition() {
        let formDef : {label : string, field : string}[] = 
            [
                {"label" : "form.doitool.type", "field" : "type"},
                {"label" : "form.doitool.description", "field" : "description"}                 
            ]
        ;
        return formDef;
    }
    
    public getFormattedFullName() : string {
        return this.type;
    }   
    
    public getPopupDisplay() : string {
        return this.getFormattedFullName(); 
    }    
}