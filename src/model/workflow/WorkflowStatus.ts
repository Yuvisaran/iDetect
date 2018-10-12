'use strict';

import { Workflow } from './../adm/workflow/Workflow';

export class WorkflowStatus {
    public id : number;
    public name : string;
    public description : string;
    public parentId : string[];
    public orgunitId : string;
    public domain : string;
    public scenario: string;
    public screenName : string;
    public screenCode : string;
    public target : string;
    public closed : number;
    public version : number;
    public actionDescription : string;
    
    public creationDtg : Date;
    public lastUpdateDtg : Date;
    public creationUser : string;
    public lastUpdateUser : string;
    public deleteStatus : number;
    
    public workflowId : number;
    public workflow : Workflow;
    
    public nextStatuses : string;
    public linked : boolean;
    public massExecution : number;
    
    constructor() {
                
    }
}