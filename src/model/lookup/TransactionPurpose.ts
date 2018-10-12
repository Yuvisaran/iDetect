'use strict';

import { BasicLookup } from './BasicLookup';

export class TransactionPurpose extends BasicLookup {
    
    public code : string;
    public description : string;
    
    constructor() {
       super(); 
    }
}