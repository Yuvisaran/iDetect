'use strict'

import { BasicLookup } from './BasicLookup';

export class EmailType extends BasicLookup {
    
    public code : string;    
    public description : string;
    public type : string;
    
    constructor() {
        super();    
    }
    
    public getFormattedFullName() : string {
        return this.description;   
    }
}