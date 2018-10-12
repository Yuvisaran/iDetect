'use strict'

import { BasicLookup } from './BasicLookup';

export class BusinessCodeRisk extends BasicLookup {
    
    public typeRisk : string;    
    public value : number;
    public businessCodeId : string;
    public businessCodeDescription : string;
    
    constructor() {
        super();    
    }
}