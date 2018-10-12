'use strict';

import { UIConstant } from './../../constants/UIConstant';
import { BasicEntity } from './BasicEntity';

export class DoiPurchaseOrderEntity extends BasicEntity {
   
    public originId : string;
    public amount : number;
    public submissionDate : Date;
    public quantity : number;
    public unitPrice : number;
    
    public purchaseNumber : string;
    
    public vendorNumber : string;     
    public version : number; 
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.PURCHASEORDER_DOI_IDX;
        this.imageStatus = 1313; 
    }
    
    public getFormDefintion() {
        let formDef : {label : string, field : string}[] = 
            [
                {"label" : "form.paymentevent.vendorNumber", "field" : "vendorNumber"},
                {"label" : "form.paymentevent.quantity", "field" : "quantity"}
            ];
        return formDef;
    }
    
    public getPopupDisplay() : string {
        if (this.purchaseNumber != null)
            return this.purchaseNumber;
        
        return "";
        
    }
        
    public getFormattedFullName() : string {
        if (this.purchaseNumber != null)
            return this.purchaseNumber;
        else 
            return "";
    }
    
    public get nodeTimeReorg() : Date {
        return this.submissionDate;
    }    
    
}