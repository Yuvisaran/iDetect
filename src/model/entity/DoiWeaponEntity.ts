'use strict';

import { UIConstant } from './../../constants/UIConstant';
import { BasicEntity } from './BasicEntity';

export class DoiWeaponEntity extends BasicEntity {
    
    public category : string;
    public type : string;
    public height : number;
    public length : number;
    public weight : number;
    public wide : number;
    public make : string;
    public model : string;
    public caliber : number;
    public caliberUnit : string;
    
    public originId : string;
    
    public version : number;    
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.WEAPON_DOI_IDX; 
    }
    
    public getFormDefinition()  {
        let formDef : {label : string, field : string}[] = 
            [
                {"label" : "form.doiweapon.type", "field" : "type"},
                {"label" : "form.doiweapon.model", "field" : "model"}                   
            ]
        ;
        return formDef;
    }
    
    public getFormattedFullName() : string {
        if (this.model != null) {
            return this.model;
        } else {
            return "";
        }
    }
    
    public getPopupDisplay() : string {
        return this.getFormattedFullName();
    }    
}