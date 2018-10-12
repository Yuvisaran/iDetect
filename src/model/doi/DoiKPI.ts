'use strict';

import { DoiBaseInfo } from './DoiBaseInfo';

export class DoiKPI extends DoiBaseInfo {
    
    public uid : string;
    public originId : string;
    
    public uidTbl : string;
    public listId : string;
    
    public KPICategory : string;
    public KPISubCategory : string;
    
    public KPIValue : string;
    public KPIStartDate : Date;
    public KPIEndDate : Date;
    
    public version : number;    
    
    constructor() {
        super();
    }
        
    public toString() : string {
        let tmpStr : string = "";
        
        if (this.KPISubCategory != null)
            tmpStr += this.KPISubCategory;
        
        return tmpStr;
    }
    
    public getFormattedFullName() : string {
        return this.toString();
    }
}