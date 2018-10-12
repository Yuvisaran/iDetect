'use strict';

import { BasicLookup} from './BasicLookup';
import { CurrencyRisk } from './CurrencyRisk';

export class Currencies extends BasicLookup {
    
    public iso3 : string;
    public name : string;
    public code : string;
    public arrayOfRisks : CurrencyRisk[];       
    
    constructor() {
        super();
    }
    
    public equals(curr : Currencies) : boolean {
        if (curr == null)
            return false;
        if (this.uid != curr.uid)
            return false;
        if (this.iso3 != curr.iso3)
            return false;
        if (this.name != curr.name) 
            return false;
        return true;            
    }
    
    public getFormattedFullName() : string {
        return this.name;    
    }
}