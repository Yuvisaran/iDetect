'use strict';

import { BasicLookup } from './BasicLookup';

export class AccountType extends BasicLookup {
    
    public type : string;
    public description : string;
    public definition : string;        
    
    constructor() {
        super();
    }
    
}