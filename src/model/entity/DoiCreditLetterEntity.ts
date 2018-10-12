'use strict';

import { BasicEntity } from './BasicEntity';
import { UIConstant } from './../../constants/UIConstant';
import { Currencies } from './../lookup/Currencies';

export class DoiCreditLetterEntity extends BasicEntity {
   
    public sequenceOfTotal : string;
    public documentaryForm : string;
    public documentaryCreditNumber : string;
    public refPreAdvice : string;
    public issueDate : Date;
    public applicableRules : string;
    public dateOfExpiry : Date;
    public placeOfExpiry : string;
    
    public applicant : string;
    public applicantBank : string;
    public beneficiary : string;
    
    // Field 32B MT700
    public originalAmount : number;
    public originalCurrency : string;
    public originalCurrencyData : Currencies;
    
    // Field 41A Opt A, D
    public availCredBIC : string;
    public availCredBankName : string;
    public availCredBankLoc : string;
    
    public percentageCreditAmount : number;
    public maxCreditAmount : number;
    public addAmountCovered : number;
    
    // 71B Charges
    public charges : number;
    
    public draftAt : string;
    public drawee : string;
    
    //43P Partial Shipments
    public partialShipments : string;
    
    // 43T Transshipment
    public transShipment : string;
    
    // 53a Reimbursing Bank
    public reimbursingBnkName : string;
    
    public orgUnitId : number;
    public originId : string;
    public version : number;    
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.CREDITLETTER_DOI_IDX;
    }
    
    //TODO could be a constant maybe move it to constant file
    public getFormDefinition() {
        let formDef : {label : string , field : string }[] = [
            {"label" : "form.doiegroup.groupName", "field" : "originId"}
        ];
        return formDef;
    }
    
    public getPopupDisplay() : string {
        return this.originId;
    }
    
    public getFormattedFullName() : string {
        return this.originId;
    }
    
    public get longitude() : number {
        if (this._longitude!=-1)
            return this._longitude;
        
        return -1;
    }
    
    public get latitude() : number {
        if (this._latitude != -1)
            return this._latitude;          
        
        return -1;
    }
    
    public set longitude(inlong : number) {
        this._longitude = inlong;
    }
    
    public set latitude(inlat : number) {
        this._latitude = inlat;
    }
}