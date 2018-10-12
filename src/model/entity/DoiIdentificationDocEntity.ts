'use strict';

import { UIConstant } from './../../constants/UIConstant';
import { BasicEntity } from './BasicEntity';
import { Country } from './../lookup/Country';
import { IdDocumentType } from './../lookup/IdDocumentType';
import { DoiEntityComment } from './../doi/DoiEntityComment';

export class DoiIdentificationDocEntity extends BasicEntity {
    
    public number : string;
    public type : string;
    public _typeObj : IdDocumentType;
    public issuingCountry : string;
    public issuingCountryObj : Country;
    public originId : string;
    public version : number;
    public orgUnitId : number;
    public issuingCountryIso3 : string;
    public issuedBy : string;
    public collectedDate : Date;
    public description : string;
    public fromCountryObj : Country;
    public fromCountry : string;
    
    public comment : DoiEntityComment;
    
    constructor() {
        super();
        this.idxTypeOfEntity=UIConstant.IDENTIFICATION_DOI_IDX;         
    }
    
    public getFormDefinition() {
        let formDef : { label : string, field : string}[] = 
            [
                {"label" : "form.doiiddoc.number", "field" : "number"},
                {"label" : "form.doiiddoc.type", "field" : "type"}                  
            ]
        ;
        return formDef;
    }
    
    public toString() : string {
        if (this.number != null)
            return this.number;
        return "";
    }
    
    public getFormattedFullName() : string {        
        return this.toString();
    }
    
    public getPopupDisplay() : string {
        return this.toString();
    }
    
    public equals(tmpDoc:DoiIdentificationDocEntity) : boolean {
        if (tmpDoc != null) {
            if (this.number != tmpDoc.number) return false;
            if (this.type != tmpDoc.type) return false;
        } else {
            return false;
        }
        return true;
    }
    
    public get typeObjdescription() : string {
        if (this.typeObj != null) {
            return this.typeObj.description;
        } else {
            return this.type;
        }
    }
    
    public get typeObj() : IdDocumentType {
        return this._typeObj;    
    }
    
    public set typeObj(inIdDoc : IdDocumentType) {
        this._typeObj = inIdDoc;
        
        if (inIdDoc == null) {
            this.type = null;
        } else {
            this.type = inIdDoc.uid;
        }
    }
}
