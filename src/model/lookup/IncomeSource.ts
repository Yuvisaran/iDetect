'use strict'

import { BasicLookup } from './BasicLookup';

export class IncomeSource extends BasicLookup {
    
    public code : string;    
    public description : string;
    
    constructor() {
        super();    
    }
}