'use strict';

import { BasicLookup } from './BasicLookup';

export class PhoneExtension extends BasicLookup {
   
    public extension : string;
    public countryName : string;
    public _countryId : string;
    
    constructor() {
       super(); 
    }
    
    public get countryId() : string{
       return this._countryId; 
    }
    
    public set countryId(country : string) { 
           this._countryId = country; 
    }
    
}