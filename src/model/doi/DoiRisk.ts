'use strict';

import { DoiBaseInfo } from './DoiBaseInfo';

export class DoiRisk extends DoiBaseInfo {
   
    public uid : string;
    public originId : string;
    public listId : number; 
    public uidTbl : string;
        
    public riskCategory : string;
    public riskSubCategory : string;
    
    public riskScoring : number;
    public riskStartDate : Date;
    public riskEndDate : Date;
    
    public version : number;
    
    constructor() {
        super();
    }
    
    public equals(tmpRisk:DoiRisk) : boolean {
        if (tmpRisk != null) {
            if ((this.riskCategory != null) && (this.riskSubCategory != null)) {
                return (this.riskCategory == tmpRisk.riskCategory) && (this.riskSubCategory == tmpRisk.riskSubCategory);
            } else if (this.riskCategory != null) {
                return (this.riskCategory == tmpRisk.riskCategory);
            } else if (this.riskSubCategory != null) {
                return (this.riskSubCategory == tmpRisk.riskSubCategory);
            }
        }
        return false;
    }
    
    public getFormattedFullName() : string {
        if (this.riskCategory != null) {
            if ((this.riskSubCategory != null) && (this.riskSubCategory.length > 0)) {
                return this.riskCategory + " (" + this.riskSubCategory+ ")" + ":" + this.riskScoring + "%";
            }
            return this.riskCategory + ":" + this.riskScoring + "%";
        } else if (this.riskSubCategory != null) {
            return this.riskSubCategory + ":" + this.riskScoring + "%";
        } else {
            return "";
        }
    }
     
}