'use strict';

import { BasicLookup } from './BasicLookup';

export class PaymentMode extends BasicLookup {
   
    public code : string;
    public paymentMode : string;
    
    constructor() {
       super(); 
    }
    
}