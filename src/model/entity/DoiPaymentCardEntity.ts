'use strict';

import { BasicEntity } from './BasicEntity';
import { UIConstant } from './../../constants/UIConstant';
import { CardType } from './../lookup/CardType';

export class DoiPaymentCardEntity extends BasicEntity {

    public fullNumber : string;
    public mii : string;
    public iin : string;
    public pan : string;
    
    public monthlyLimit : number;
    public monthlyCashLimit : number;
    public cashDailyLimitNational : number;
    public cashDailyLimitInternational : number;
    
    public cardBlocked : boolean;
    
    public cardType : CardType;
    public cardTypeId : string;
    
    public originId : string
    public orgUnitId : number;
    public domain : string;
    
    public  version : number;
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.PAYMENTCARD_DOI_IDX; 
    }
    
    public getFormDefinition() {
        let formDef : {label : string, field : string}[] =
            [
                {"label" : "form.paymentcard.fullNumber", "field" : "fullNumber"},  
                {"label" : "form.paymentcard.pan", "field" : "pan"}
            ]
        ;
        return formDef;
    }

    public getFormattedFullName() : string {
        if (this.fullNumber != null)
            return this.fullNumber;
        else
            return "";
    }
    
    public getPopupDisplay() : string {
        return this.getFormattedFullName();
    }    
}