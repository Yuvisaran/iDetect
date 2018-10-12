'use strict';

import { BasicEntity } from './BasicEntity';
import { UIConstant } from './../../constants/UIConstant';
import { DoiSource } from './../doi/DoiSource';

export class DoiMedecineEntity extends BasicEntity {
     
    public name : string;
    public type : string;
    public category : string;
    public description : string;
    public company : string;
        
    public autorisationStatus : string;
    public autorisationDate : Date;
    public price : number;
    public reimbursement : number; 
    
    public commercialisation : Date;
    public rcp : string;
        
    public originId : string;     
    public arrayOfSources : DoiSource[];      
    public version : number;
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.MEDICINE_DOI_IDX;
        this.imageStatus = 1320;        
    }
    
    public getFormDefinition() {
        let formDef : {label : string, field : string}[] = 
            [
                {"label" : "form.doiperson.name", "field" : "name"}                 
            ]
        ;
        return formDef;
    }
    
    public getPopupDisplay() : string {
        return this.name;            
    }
    
    public getFormattedFullName() : string {
        return this.name;            
    }    
}