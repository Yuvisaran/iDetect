'use strict'

import { BasicLookup } from './BasicLookup';
import { TimeZone } from './TimeZone';

export class CompanyCode extends BasicLookup {
    
    public code : string;    
    public name : string;
    public _countryId : string;
    public countryIso2 : string;
    public differenceToGmt : number;
    public timeZone : string;
    public timeZoneObj : TimeZone;
    
    constructor() {
        super();    
    }
    
    public get countryId() : string {
        return this._countryId;    
    }
    
    public set countryId (country : string) {
        this._countryId = country;
    }
}