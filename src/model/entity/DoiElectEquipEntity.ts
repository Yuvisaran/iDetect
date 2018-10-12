'use strict';

import { UIConstant } from './../../constants/UIConstant';
import { BasicEntity } from './BasicEntity';

export class DoiElectEquipEntity extends BasicEntity {
    
    public description : string;
    public type : string;
    public manufacturer : string;
    public serialNumber : string;
    public macAddress : string;
    
    public originId : string;
    
    public version : number;
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.ELECTEQUIP_DOI_IDX; 
    }
    
    //TODO could be a constant maybe move it to constant file
    //TODO search where macAdress is used and rename that to macAddress
    public getFormDefinition() {
        let formDef : {label : string , field : string }[] = [
            {"label" : "form.doielec.macAddress", "field" : "macAdress"},
            {"label" : "form.doievent.description", "field" : "description"}
        ];
        return formDef;
    }
    
    public getFormattedFullName() : string {
        
        if (this.macAddress!=null)
            return this.macAddress;
        
        let str : string = "";
        if (this.manufacturer != null)
            str += this.manufacturer + " ";
        if (this.type != null)
            str += this.type;
        return str;
    }
}