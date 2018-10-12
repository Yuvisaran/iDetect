'use strict';

import { BasicEntity } from './BasicEntity';
import { UIConstant } from './../../constants/UIConstant';

export class DoiPaymentEventEntity extends BasicEntity {
    
    public originId : string;
    public amount : number;
    public submissionDate : Date;
    public quantity : number;
    public unitPrice : number;
    
    public vendorNumber : string;
    public vendorBankAccount : string;
    
    public version : number;
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.PAYMENTEVENT_DOI_IDX;
        this.imageStatus = 1311;
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
    
    public getPopupDisplay() : string {
        if (this.originId != null)
            return this.originId;
        
        return "";
        
    }
    
    public getFormattedFullName() : string {
        if (this.originId != null)
            return this.originId;
        else 
            return "";
    }
    
    public get nodeTimeReorg() : Date {
        return this.submissionDate;
    }    
    
}