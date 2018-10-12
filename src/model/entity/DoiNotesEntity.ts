'use strict';

import { BasicEntity } from './BasicEntity';
import { UIConstant } from './../../constants/UIConstant';

export class DoiNotesEntity extends BasicEntity {
    
    public category : string;
    
    public originId : string;
    public orgUnitId : number;
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.DOINOTES_DOI_IDX;         
    }
    
    public getFormDefinition() {
        let formDef : {label : string, field : string}[] = 
                [
                    {"label":"form.doinotes.category", "field":"category"}
                ]
            ;
            return formDef;
    }
    
    
}