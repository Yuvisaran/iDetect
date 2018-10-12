'use strict';

import { UIConstant } from './../../constants/UIConstant';
import { BasicEntity } from './BasicEntity';
import { Country } from './../lookup/Country';
import { AccountType } from './../lookup/AccountType';
import { BankBranchCode } from './../lookup/BankBranchCode';
import { AgentBranchCode } from './../lookup/AgentBranchCode';
import { Currencies } from './../lookup/Currencies';
import { DoiAccountBalance } from './../doi/DoiAccountBalance';
import { DoiRisk } from './../doi/DoiRisk';

export class DoiAccountEntity extends BasicEntity{
   
    public accountType : string;
    public _accountTypeObj : AccountType;
    public fullAccountNumber : string;
    public bic : string;
    public bankIban : string;
    public accountNumber : string;
    
    public branchCountry : string;
    public branchFullCountry : Country;
    public branchCity : string;
    public bankName : string;
    
    public branchName : string;       
    public branchNameObj : BankBranchCode;
    
    public agentBranchName : string;
    public agentBranchNameObj : AgentBranchCode;
    
    public openingDate : Date;
    public closingDate : Date;
    
    public status : string;
    public baseCurrency : string;
    public _currency : Currencies;
    public bankIdentifier : string;
    
    public accountOrigin : string;
    public primaryCustomerId : string;
    
    public originId : string;
    public orgUnitId : number;
    
    public endOfDayBalance : number;
    
    public version : number;
    
    public balances : DoiAccountBalance[];
    
    public arrayOfRisks : DoiRisk[];
    
    
    constructor() {
        super();
        this.idxTypeOfEntity = UIConstant.ACCOUNT_IDX;
        this.imageStatus = 1031;
    }
    
    public get agentBranchNameDescription() : string {
        if (this.agentBranchNameObj) {
            return this.agentBranchNameObj.name;
        }
        return this.agentBranchName;
    }
    
    public get branchNameDescription() : string {
        if (this.branchNameObj) {
            return this.branchNameObj.name;
        }
        return this.branchName;
    }
    
    public get accountTypeDescription() : string {
        if (this.accountTypeObj!=null) {
            return this.accountTypeObj.description;
        }
        return "";
    }
    
    public get accountTypeObj() : AccountType {
        return this._accountTypeObj;
    }
    
    public set accountTypeObj(inacctype:AccountType) {
        this._accountTypeObj=inacctype;
        
        if (inacctype!=null) {
            this.accountType=inacctype.uid;
        } else {
            this.accountType=null;
        }
    }
    
    
    public getFormDefinition() {
        let formDef = 
            [
                {label:"form.doiaccount.accountNumber", field:"accountNumber"}                  
            ]
        ;
        return formDef;
    }

    public get currencyName() : string {
        if (this._currency!=null)
            return this._currency.name;
        return "";          
    }
    
    public get typeName() : string {
        if (this.accountTypeObj!=null)
            return this.accountTypeObj.type;
        return "";          
    }
    
    //TODO ?
    public getPopupDisplay() : string {
        if (this.fullAccountNumber!=null)
            return this.fullAccountNumber;
        else 
            return this.accountNumber;
    }
    
    public getFormattedFullName() : string {
        if (this.fullAccountNumber != null)
            return this.fullAccountNumber;
        else if (this.accountNumber != null)
            return this.accountNumber;
        else
            return this.bic;
    }
    
    public get branchCountryIso3() : string {
        if (this.branchFullCountry != null)
            return this.branchFullCountry.iso3;
        else
            return "";
    }
    
    public set branchCountryIso3(iniso3 : string) {
        if (this.branchFullCountry == null) {
            this.branchFullCountry = new Country();
        }
        this.branchFullCountry.iso3 = iniso3;         
    }
    
    public get currency() : Currencies {
        return this._currency;   
    }
    
    public set currency(inCurrencies:Currencies) {
        this._currency = inCurrencies;
        
        if (inCurrencies == null) {
            this.baseCurrency = null;
        } else {
            this.baseCurrency = inCurrencies.uid;
        }
    }
        
    public get longitude() : number {
        if (this._longitude != -1)
            return this._longitude;
        
        if (this.branchFullCountry != null)
            return this.branchFullCountry.longitude;
        
        return -1;
    }
    
    public get latitude() : number {
        if (this._latitude != -1)
            return this._latitude;
        
        if (this.branchFullCountry != null)
            return this.branchFullCountry.latitude;
        
        return -1;
    }
    
    public set longitude(inlong : number) {
        this._longitude = inlong;
    }
    
    public set latitude(inlat : number) {
        this._latitude = inlat;
    }

    
}