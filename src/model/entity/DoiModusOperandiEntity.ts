'use strict';

import { BasicEntity } from './BasicEntity';
import { UIConstant } from './../../constants/UIConstant';

export class DoiModusOperandiEntity extends BasicEntity {
    
    public category : string;
    
    public originId : string;
    public orgUnitId : number;

    public version : number;   
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.MODUSOPERANDI_DOI_IDX;         
    }
    
    public getFormDefinition()  {
        let formDef : {label : string, field : string}[] =
            [
                {"label" : "form.doimodusoperandi.category", "field" : "category"}
            ]
        ;
        return formDef;
    }
    
    public getPopupDisplay() : string {
        if (this.category != null)
            return this.category;
        else 
            return "";
    }
    
    public getFormattedFullName() : string {
        return this.getPopupDisplay();
    }
}