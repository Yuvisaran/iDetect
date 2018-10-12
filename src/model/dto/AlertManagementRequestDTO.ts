'use strict';

import { DoiAlertEntity } from './../entity/DoiAlertEntity';
import { BasicEntity } from './../entity/BasicEntity';
import { DoiCaseEntity } from './../entity/DoiCaseEntity';
import { DoiEntityComment } from './../doi/DoiEntityComment';
import { UserDashBoardPreferences } from './../user/UserDashBoardPreferences';
import { DoiKPI } from './../doi/DoiKPI';



export class AlertManagementRequestDTO  {
  
    public alert : DoiAlertEntity;
    public alertType : number;
    public alerts : Array<DoiAlertEntity>;
    public arrayOfEntities : Array<BasicEntity>;
    public auditCategory : string;
    public calculateMaxRecords : boolean;
    public caseType : number;
    public cases : Array<DoiCaseEntity>;
    public comment : DoiEntityComment;
    public dashPref : Array<UserDashBoardPreferences>;
    public depth : number;
    public doikpilist : Array<DoiKPI>;
    
}