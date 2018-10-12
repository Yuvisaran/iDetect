'use strict';

import { BasicEntity } from './BasicEntity';
import { UIConstant } from './../../constants/UIConstant';

export class DoiInvoiceEntity extends BasicEntity {
    
    public amountVat : number;
    public submissionDate : Date;
    public paymentDate : Date;
    public quantity : number;
    public unitPrice : number;
    
    public originId : string;
    public orgUnitId : string;

    public version : number;
            
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.INVOICEORDER_DOI_IDX;
        this.imageStatus = 1315;
    }
    
    public getFormDefinition()  {
        let formDef : {label : string, field : string}[] = 
            [
                {"label" : "form.doiinvoice.amountVat", "field" : "amountVat"},
                {"label" : "form.doiinvoice.quantity", "field" : "quantity"}
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
