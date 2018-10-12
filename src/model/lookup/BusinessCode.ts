'use strict'

import { BasicLookup } from './BasicLookup';
import { DoiRisk } from './../doi/DoiRisk';

export class BusinessCode extends BasicLookup {
    
    public code : string;  
    public name : string;
    public category : string;  
    public description : string;
    public arrayOfRisks : string[];
        
    constructor() {
        super();    
    }
    
    public getFormattedFullName() : string {
        return this.description;   
    }
}