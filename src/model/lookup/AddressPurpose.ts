'use strict'

import { BasicLookup } from './BasicLookup';

export class AddressPurpose extends BasicLookup {
    
    public code : string;    
    public description : string;
    public purpose : string;
    
    constructor() {
        super();    
    }
    
    public getFormattedFullName() : string {
        return this.description;   
    }
}