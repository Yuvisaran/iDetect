'use strict';

import { BasicLookup } from './BasicLookup';

export class TransactionFlag extends BasicLookup {
   
    public code : string;
    public size : number;
    public style : number;
    public colorCode : number;
    public description : string;
    
    constructor() {
        super();
    }
    
}