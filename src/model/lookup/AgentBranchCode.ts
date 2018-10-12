'use strict';

import { BasicLookup } from './BasicLookup';


export class AgentBranchCode extends BasicLookup {
    
    public locationId : string;
    public name : string;
    public _companyCodeId : string;
    public companyCodeCode : string;
    public _countryId : string;
    public countryIso2 : string;
    public differenceToGmt : number;
    public timezone : number;   
    
    constructor() {
        super();   
    }
    
    public get countryId() : string {
        return this._countryId;    
    }
    
    public set countryId(country : string ) {
        this._countryId = country;       
    }
    
    public get companyCodeId() :string {
        return this._companyCodeId;    
    }
    
    public set companyCodeId(companyCode : string ) {
        this._companyCodeId = companyCode;
    }
}