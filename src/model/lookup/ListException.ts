'use strict';

import { BasicLookup } from './BasicLookup';

export class ListException extends BasicLookup {
    
    public listName : string;
    public description : string;
    
    constructor() {
       super(); 
    }
    
}