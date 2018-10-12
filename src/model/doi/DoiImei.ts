'use strict';

import { DoiBaseInfo } from './DoiBaseInfo';

export class DoiImei extends DoiBaseInfo {
   
    public uid : string;
    public imei_sv : string;
    public tac : string;
    public snr : string;
    public cd_svn : string;
    public brand : string;
    public model : string;
    
    public orgUnitId : string;
    public listId : string;
    public originId : string;
    public version : number;
    
    public toString() : string {
        let tmpStr : string = "";
        
        if (this.imei_sv!=null)
            tmpStr += this.imei_sv;
        
        return tmpStr;
    }
    
    public getFormattedFullName() : string {
        return this.toString();
    }
    
}