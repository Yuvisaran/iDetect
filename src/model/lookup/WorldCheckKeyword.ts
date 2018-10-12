'use strict';

import { BasicLookup } from './BasicLookup';

export class WorldCheckKeyword extends BasicLookup {
   
    public code : string;
    public description : string;
    public type : string;
    
    constructor() {
       super(); 
    }
    
}