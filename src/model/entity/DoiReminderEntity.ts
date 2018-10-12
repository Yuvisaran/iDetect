'use strict';

import { UIConstant } from './../../constants/UIConstant';
import { BasicEntity } from './BasicEntity';
import { ReminderStatus } from './ReminderStatus';

export class DoiReminderEntity extends BasicEntity {
    
    public description : string;
    public reminderDate : Date;   
    public descriptionSmall : string;
    public originId : string;
    public typeId : string;   
    public groupId : number;
    public reminderStatuses : ReminderStatus[];    
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.REMINDER_DOI_IDX; 
    }
    
    public getFormDefinition()  {
        var formDef : {label : string, field : string}[] = 
            [
                //{"label" : "form.doireminder.name", "field" : "string"},
                //{"label" : "form.doireminder.type", "field" : "type"}                 
            ]
        ;
        return formDef;
    }
    
    public getFormattedFullName() : string {            
        return this.toString();
    }
    
    public toString() : string {
        if (this.descriptionSmall != null)
            return this.descriptionSmall;
        return "";
    }
    
    public getPopupDisplay() : string {
        return this.getFormattedFullName();
    }    
    
}