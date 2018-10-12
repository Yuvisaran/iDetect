'use strict';

import { BasicEntity } from './BasicEntity';
import { EmailType } from './../lookup/EmailType';
import { UIConstant } from './../../constants/UIConstant';

export class DoiEmailEntity extends BasicEntity {
    
    public email : string;
    public localPart : string;
    public computerName : string;
    public thirdLevelDomain : string;
    public topLevelDomain : string;
    public countryUid : string;
    public internalExternal : string;
    public originalId : string;
    public version : string;
    public purpose : string;
   
    public type : string;
    public typeObj : EmailType;
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.EMAIL_DOI_IDX; 
    }
    
    public get typeObjdescription() : string {
        if (this.typeObj != null) {
            return this.typeObj.description;
        } else {
            return this.type;
        }
    }    
    
    //TODO could be a constant maybe move it to constant file
    public getFormDefinition() {
        let formDef : {label : string , field : string }[] = [
            {"label" : "form.doiemail.email", "field" : "type"}
        ];
        return formDef;
    }
    
        public getFormattedFullName() : string {
            if (this.email != null) {
                return this.email;
            } else {
                return "";
            }
        }
        
        public getPopupDisplay() : string {
            return this.getFormattedFullName();
        }
        
        public toString() : string {
            return this.getFormattedFullName();
        }
        
        public equals(tmpEMail : DoiEmailEntity) : boolean {
            if (tmpEMail != null) {
                if (tmpEMail.email == this.email)
                    return true;
            }
            return false;
        }
    
}