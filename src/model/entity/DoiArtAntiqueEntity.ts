'use strict';

//TODO is the interface needed ?
import { UIConstant } from './../../constants/UIConstant';
import { BasicEntity } from './BasicEntity';

export class DoiArtAntiqueEntity extends BasicEntity {
   
    public originId : string;
    public orgUnitId : number;
    
    public category : string;
    public type : string;
    public description : string;
    public creator : string;
    public origin : string;
    public stylisticPeriod : string;
    public timePeriod : number;
    public subjectMatter : string;
    public design : string;
    public height : number;
    public depth : number;
    public width : number;
    public functionMvment : string;
    
    public version : number;    
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.ARTANTIQUE_DOI_IDX; 
    }
    
    
    //TODO could be a constant maybe move it to constant file
    public getFormDefinition() {
        let formDef : {label : string , field : string }[] = [
            {"label" : "form.doiartantique.type", "field" : "type"},
            {"label" : "form.doiartantique.category", "field" : "category"}
        ];
        
        return formDef; 
    }
    
    public getFormattedFullName() : string {
       if (this.type != null) {
          return this.type; 
       } else {
          return ""; 
       }
    }
    
    
}