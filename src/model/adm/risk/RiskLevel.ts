'use strict';

import { OrgUnit } from './../orgunit/OrgUnit';

export class RiskLevel {
 
    public id : number;
    public orgUnitId : number;
    public orgUnit : OrgUnit;
    public low : number;
    public guarded : number;
    public elevated : number;
    public high : number;
    public severe : number;
    
    public overallRiskLow : number;
    public overallRiskGuarded : number;
    public overallRiskElevated : number;
    public overallRiskHigh : number;
    public overallRiskSevere : number;    
}