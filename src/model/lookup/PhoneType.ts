'use strict';

import { BasicLookup } from './BasicLookup';

export class PhoneType extends BasicLookup {
    public type : string;
    public internalCode : string;
    
    constructor() {
       super(); 
    }
}