'use strict';

import { BasicLookup } from './BasicLookup';

export class TimeZone extends BasicLookup {
    
    public code : string;
    public description : string;
    public continent : string;
    
    constructor() {
       super(); 
    }
}