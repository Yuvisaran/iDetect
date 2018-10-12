'use strict';

import { UIConstant } from './../../constants/UIConstant';
import { BasicEntity } from './BasicEntity';
import { RelationShipType } from './../st/RelationShipType';

export class DoiEntityGroup extends BasicEntity {
   
    public groupName : string;
    public grouptType : string;
    
    public description : string;
    public defaultRelation : RelationShipType;
    
    public arrayOfEntities : BasicEntity[];
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.ENTITYGROUP_DOI_IDX; 
    }
    
    //TODO could be a constant maybe move it to constant file
    public getFormDefinition() {
        let formDef : {label : string , field : string }[] = [
            {"label" : "form.doigroup.groupName", "field" : "groupName"}
        ];
        return formDef;
    }
    
        public getFormattedFullName() : string {
            
            if (this.groupName != null) 
                return this.groupName.toUpperCase();
            else
                return "";          
        }  
    
}
