'use strict'

import { BasicLookup } from './BasicLookup';

export class CategorizationLevel extends BasicLookup {
    
    public dataType : string;
    public levelId : string;
    public levelDescription : string;
    
    constructor() {
        super();    
    }
    
}