'use strict';

import { BasicLookup} from './BasicLookup';

export class TransactionType extends BasicLookup {
    
    public type : string;
    public description : string;
    public direction : string; 

    constructor() {
       super(); 
    }
}