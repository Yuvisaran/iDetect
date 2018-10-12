'use strict'

import { BasicLookup } from './BasicLookup';

export class CurrencyExchangeRates extends BasicLookup {
    
    public _currencySourceId : string;    
    public currencySourceIso3 : string;
    public _currencyTargetId : string;
    public currencyTargetIso3 : string;
    public exchangeRate : number;
    public calculationDtg : Date;
    
    constructor() {
        super();    
    }
    
    public get currencySourceId() : string {
        return this._currencySourceId;   
    }
    
    public set currencySourceId(currency : string) {
            this._currencySourceId = currency;
    }
    
    public get currencyTargetId() : string {
        return this._currencyTargetId;    
    }
    
    public set currencyTargetId(currency : string) {
            this._currencyTargetId = currency;  
    }
    
}