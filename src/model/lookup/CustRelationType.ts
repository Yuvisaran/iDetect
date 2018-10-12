'use strict'

import { BasicLookup } from './BasicLookup';

export class CustRelationType extends BasicLookup {
    
    public code : string;    
    public internalCode : string;
    public description : string;
    
    constructor() {
        super();    
    }
    
    public equals(crt : CustRelationType) : boolean {
        if (this.code != crt.code) {
            return false;
        }
        return true;    
    }
    
    public getFormattedFullName() : string {
        return this.description;   
    }
}