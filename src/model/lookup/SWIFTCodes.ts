'use strict';

import { BasicLookup } from './BasicLookup';

export class SWIFTCodes extends BasicLookup {

    public name : string;
    public city : string;
    public branchName : string;
    public swiftCode : string;
    public countryName : string;
    public countryId : string;
    
    constructor() {
       super(); 
    }
}