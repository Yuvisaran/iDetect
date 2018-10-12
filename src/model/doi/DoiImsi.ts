'use strict';

import { DoiBaseInfo } from './DoiBaseInfo';

export class DoiImsi extends DoiBaseInfo {
   
    public uid : string;
    public imsi : string;
    public mcc : string;
    public mnc : string;
    public msin : string;
    
    public orgUnitId : string;
    public listId : string;
    public originId : string;
    public version : number; 
    
    public toString() : string {
        let tmpStr : string = "";
        
        if (this.imsi != null)
            tmpStr += this.imsi;
        
        return tmpStr;
    }
    
    public getFormattedFullName() : string {
        return this.toString();
    }
    
}