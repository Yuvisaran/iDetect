'use strict'

import { BasicLookup } from './BasicLookup';
import { DoiRisk } from './../doi/DoiRisk';

export class ActivityCode extends BasicLookup {
    
    public description : string;    
    public code : string;
    public category : string;
    public arrayOfRisks : DoiRisk[];
    
    constructor() {
        super();    
    }
    
    public getFormattedFullName() : string {
        return this.description;
    }
    
}