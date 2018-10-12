'use strict'

import { BasicLookup } from './BasicLookup';

export class LegalForm extends BasicLookup {
    
    public code : string;    
    public description : string;
    public _countryId : string;
    public countryName : string;
    public source : string;
    public legalType : string;
    
    constructor() {
        super();    
    }
    
    public getDescription() : string {
        if (this.description != null) {
            return this.description;
        } else {
            return "";
        }
    }
    
    public equals(legalForm : LegalForm) : boolean {
        if (this.description != legalForm.description) {
            return false;
        }
        if (this.code != legalForm.code) {
            return false;
        }
        if (this.countryId != legalForm.countryId) {
            return false;
        }
        if (this.source != legalForm.source) {
            return false;
        }
        if (this.legalType != legalForm.legalType) {
            return false;
        }    
    }
    
    public get countryId() : string {
        return this._countryId;
    }
    
    public set countryId(country: string) {
        this._countryId = country;
    }
    
    public getFormattedFullName() : string {
        return this.description;
    }
}