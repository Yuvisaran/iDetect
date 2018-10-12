'use strict'

import { BasicLookup } from './BasicLookup';

export class CountrySynonyms extends BasicLookup {
    
    public countrySynonym : string;    
    public nationalitySynonym : string;
    public language : string;
    public _countryId : string;
    public countryIso3 : string;
    
    constructor() {
        super();    
    }
    
    public get countryId() : string {
        return this._countryId;   
    }
    
    public set countryId(country : string) {        
            this._countryId = country;
    }
}