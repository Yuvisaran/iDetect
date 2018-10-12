'use strict';

import { BasicEntity } from './BasicEntity';
import { UIConstant } from './../../constants/UIConstant';

export class DoiLinkedEntity extends BasicEntity {
    
    public linkedEntityUid : string;
    public description : string;
    
    public uidTbl : string;

    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.ENTITYLINKEDGROUP_DOI_IDX; 
    }
    
    public getFormattedFullName() : string {
        if (this.description != null)
            return this.description;
        
        return "";
    }
}