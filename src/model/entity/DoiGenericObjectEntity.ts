'use strict';

import { BasicEntity } from './BasicEntity';
import { UIConstant } from './../../constants/UIConstant';

export class DoiGenericObjectEntity extends BasicEntity {
   
    public name : string;
    public type : string;
    public category : string; 
    public description : string;
    
    public originId : string;
    public orgUnitId : number;
    
    public version : number;
    
    constructor() {
        super(); 
        this.idxTypeOfEntity = UIConstant.GENERICOBJECT_DOI_IDX;
    }
    
    public getFormDefinition() {
            let formDef : {label : string, field : string}[] = 
                [
                    {"label" : "form.doigenericobject.type", "field" : "type"},
                    {"label" : "form.doigenericobject.category", "field" : "category"}
                ]
            ;
            return formDef;
        }
        
        public getPopupDisplay() : string {
            if (this.name != null)
                return this.name;
            else if (this.type != null)
                return this.type;
            else 
                return "";
        }
        
        public getFormattedFullName() : string {
            return this.getPopupDisplay();
        }    
    
}