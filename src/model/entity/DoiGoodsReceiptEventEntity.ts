'use strict';

import { BasicEntity } from './BasicEntity';
import { UIConstant } from './../../constants/UIConstant';

export class DoiGoodsReceiptEventEntity extends BasicEntity {
   
    public amount : number;
    public amountVAT : number;
    public receptionDate : Date;
    public quantity : number;
    public unitPrice : number;
    
    public orderNumber : string;  
    public vendorNumber : string;
    
    public version : number;
    
    
    constructor() {
        super();    
        this.imageStatus = 1318;
        this.idxTypeOfEntity = UIConstant.GOODSRECEIPTEVENT_DOI_IDX;
        
        this.amount = 0;
        this.amountVAT = 0;        
    }
    
    public getFormDefinition() {
        let formDef : {label : string, field : string}[] = 
            [
                {"label" : "form.paymentevent.vendorNumber", "field" : "vendorNumber"},
                {"label" : "form.paymentevent.quantity", "field" : "quantity"}
            ]
        ;
        return formDef;
    }
    
    public getFormattedFullName() : string {
        if (this.orderNumber != null) {
            return this.orderNumber;
        } else {
            return "";
        }
    }
    
    public getPopupDisplay() : string {
        return this.getFormattedFullName();
    }
    
    public get nodeTimeReorg() : Date {
        return this.receptionDate;
    }    
}