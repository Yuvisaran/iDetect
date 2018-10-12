'use strict'

import { BasicLookup } from './BasicLookup';

export class CurrencyRisk extends BasicLookup {
    
    public typeRisk : string;    
    public value : string;
    public _currencyId : string;
    public currencyIso3 : string;
    
    constructor() {
        super();    
    }
    
    public get currencyId() : string {
        return this._currencyId;    
    }
    
    public set currencyId(currency : string) {
            this._currencyId = currency;
    }
    
}