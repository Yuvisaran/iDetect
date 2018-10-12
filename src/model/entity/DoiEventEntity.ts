'use strict';

import { BasicEntity } from './BasicEntity';
import { UIConstant } from './../../constants/UIConstant';

export class DoiEventEntity extends BasicEntity {
    
    public name : string;
    public description : string;
    public eventType : string;
    
    public originId : string;
    public organizationId : string;
    
    public version : number;
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.EVENT_DOI_IDX; 
    }
    
    //TODO could be a constant maybe move it to constant file
    public getFormDefinition() {
        let formDef : {label : string , field : string }[] = [
            {"label" : "form.doievent.name", "field" : "name"},
            {"label" : "form.doievent.description", "field" : "description"}
        ];
        return formDef;
    }
    
    public getFormattedFullName() : string {
        if (this.name != null) {
            return this.name;
        } else {
            return "";
        }
    }
    
    public getPopupDisplay() : string {
        if (this.name != null) {
            return this.name;
        } else {
            return "";
        }
    }
    
    public get nodeTimeReorg() : Date {
        if (this.startDate != null)
            return this.startDate;
        else 
            return this.createdOn;
    }
}