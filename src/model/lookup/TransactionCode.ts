'use strict';

import { BasicLookup } from './BasicLookup';

export class TransactionCode extends BasicLookup {
    public code : string;
    public description : string;
    public definition : string;
    
    constructor() {
        super();
        this.uidIcon = "2000"; //TODO put it as a constant somewhere ?
    }
}