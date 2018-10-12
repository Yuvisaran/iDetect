'use strict';

import { UIConstant } from './../../constants/UIConstant';
import { BasicEntity } from './BasicEntity';

export class DoiSwiftMessageSource extends BasicEntity {
    
    public message : string;
    public type : string;
    
    public uidTbl : string;
    public originId : string;
    
    public version : number;
            
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.TRANSACTIONS_SWIFT_IDX;
    }
    
    public getFormattedFullName() : string {
        if (this.message != null) {
            return this.message.substring(0, this.message.indexOf("\r\n"));
        } else {
            return "";
        }
    }
    
    public getPopupDisplay() : string {
        return this.getFormattedFullName();
    }    
    
}