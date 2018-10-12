'use strict';

import { BasicLookup } from './BasicLookup';

export class CountryRisk extends BasicLookup {

    public uid : string;
    public typeCountryRisk : string;
    public value : number;
    public _countryId : string;
    public countryName : string;
    
    public constructor() {
        super();
    }
    
    public set countryId(country : string) {
        this._countryId = country;
    }
    
    public get countryId() : string {
       return this._countryId; 
    }
}    