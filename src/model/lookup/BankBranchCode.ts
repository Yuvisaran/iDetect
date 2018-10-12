'use strict';

import { BasicLookup } from './BasicLookup';

export class BankBranchCode extends BasicLookup {
    
    public code : string;
    public name : string;    
    
    constructor() {
        super();
    }
    
}