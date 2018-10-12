'use strict';

import { BasicEntity } from './BasicEntity';
import { UIConstant } from './../../constants/UIConstant';
import { WorkflowStatus } from './../workflow/WorkflowStatus';
import { UIArrayCollection } from './../../constants/UIArrayCollection';

export class DoiCaseEntity extends BasicEntity {
   
    public identifier : string;
    public name : string;
    public description : string;
    public statusID : number;
    public status : string;
    public score : number;
    
    public assignTo : string;
    public assignToGroup : string;
    
    public locked : boolean;
    public lockedBy : string;
    public lockedOn : Date;
    
    public workflowStatus : WorkflowStatus;
    
    public priority : number;
    
    public originId : string;
    public oganizationId : string;
    public version : number;
    
    /*
    // Only for UI
    public closed:Boolean;
    public caseHistory:ArrayCollection;
    
    public imgSource:Class;
    */  
    
    constructor() {
        super();
        this.priority = 0;
        this.idxTypeOfEntity = UIConstant.CASE_DOI_IDX;
    }
    
    //TODO could be a constant maybe move it to constant file
    public getFormDefinition() {
        let formDef : {label : string , field : string }[] = [
            {"label" : "form.doicase.name", "field" : "type"},
            {"label" : "form.doicase.category", "field" : "category"}
        ];
        return formDef;
    }
    
        public getFormattedFullName() : string {
            if (this.name!=null) {
                return this.name;
            } else {
                if (this.description != null)
                    return this.description;
                else
                    return "";
            }
        }
        
        public getPopupDisplay() : string {
            return this.getFormattedFullName();
        }
        
        public get workflowStatusDescription () : string {
            if (this.workflowStatus != null) {
                return this.workflowStatus.actionDescription;
            } else {
                return "";
            }           
        }
    
        public get priorityDescription() : string {
            if (!isNaN(this.priority)) {                
                return UIArrayCollection.priorityArray[this.priority + 1].label;
            }
            return null;
        }
    
    
}