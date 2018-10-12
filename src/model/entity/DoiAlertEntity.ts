'use strict';

import { BasicEntity } from './BasicEntity';
import { OrgUnit } from './../adm/orgunit/OrgUnit';
import { WorkflowStatus } from './../workflow/WorkflowStatus';
import { DoiUserAlert } from './../doi/DoiUserAlert';
import { UIConstant } from './../../constants/UIConstant';
import { UIArrayCollection } from './../../constants/UIArrayCollection';
import { DoiAlertDetailDescription } from './DoiAlertDetailDescription';

export class DoiAlertEntity extends BasicEntity {
   
    public information : string;
    public detailedInformation : string;
    public scenarioName : string;
    
    public ruleName : string;
    public description : string;
    public score : number;
    public alertDate : Date;  
    
    public assignTo : string;
    public assignToGroup : string;
    public dueDate : Date;
    
    public locked : boolean;
    public lockedBy : string;
    public lockedOn : Date;
    
    public priority : number;
    public statusID : number;
    
    public organizationId : string;
    private _orgUnit : OrgUnit;
    
    public workflowStatus : WorkflowStatus;
    public worldCheckResult : BasicEntity[];
    
    public originId : string;
    public orgUnitId : number;
    
    public alertDetailsDescription : DoiAlertDetailDescription[];
    public alertedEntityDescription:String;
    
    public userAlert : DoiUserAlert;
    
    public version : number;
    
    public batchId : string;
    public whatIfId : string;
    
    public transactionReference : string;
    public messageReference : string;
    
    public riskLevelThresholds : number[];
    
    
    //TODO 
    // Only for UI
    /*
    public closed : boolean;
    public alertHistory : string[];
    */
    
   // public imgSource : ; //??? 
    
    
    constructor() {
        super();
        this.information = "";
        this.detailedInformation = "";
        this.description = "";
        this.score = 0;
        this.alertDate = new Date();
        this.assignTo = "";
        this.assignToGroup = "";
        this.dueDate = new Date();
        this.priority = 0;
        this.statusID = 0;
        this.organizationId = "";
        this.idxTypeOfEntity = UIConstant.ALERT_DOI_IDX;
        //alertHistory = new ArrayCollection();
        this.userAlert = new DoiUserAlert(); 
    }
    
    public getFormDefinition() {
        let formDef : {label : string , field : string }[] = 
            [
                {"label" : "form.doialert.scenarioName", "field" : "scenarioName"}, 
                {"label" : "form.doialert.score", "field" : "score"}
            ];
        return formDef;
    }
    
    public getFormattedFullName() : string {
        if (this.scenarioName != null) {
            return this.scenarioName;
        } else {
            return "";
        }
    }
    
    public getPopupDisplay() : string {
        return this.getFormattedFullName();
    }
    
    public get workflowStatusDescription() : string {
        if (this.workflowStatus != null)
            return this.workflowStatus.description;
        else
            return "";
    } 
    
    public set workflowStatusDescription (wkf : string) {
        if (this.workflowStatus != null)
            this.workflowStatus.description = wkf;
    }
    
    public get priorityDescription() : string {
        if (isNaN(this.priority)) {
            return UIArrayCollection.priorityArray[0].label;
        } else {
            return UIArrayCollection.priorityArray[this.priority + 1].label;
        }
    }
    
    public get priorityTranslatedDescription() : string {
        if (isNaN(this.priority)) {
            return UIArrayCollection.priorityArray[0].txt;                
        } else {
            return UIArrayCollection.priorityArray[this.priority + 1].txt;
        }
    }
    
    public get orgUnitObj() : OrgUnit {
        return this._orgUnit;
    }
    
    public set orgUnitObj(inOrgUnit : OrgUnit) {
        this._orgUnit = inOrgUnit;
        
        if (inOrgUnit == null) {
            this.organizationId = null;
        } else {
            this.organizationId = String(inOrgUnit.id);
        }
    }
    
    public get orgUnitName() : string {
        if (this.orgUnitObj!=null)
            return this.orgUnitObj.name;
        else
            return "";
    }

    
}