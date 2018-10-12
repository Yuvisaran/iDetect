'use strict'

import { BasicLookup } from './BasicLookup';

export class DeliveryOption extends BasicLookup {
    
    public code : string;    
    public deliveryOption : string;
    
    constructor() {
        super();    
    }
}