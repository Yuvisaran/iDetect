'use strict';

import { BasicLookup } from './BasicLookup'; 
import { CountryRisk } from './CountryRisk';

export class Country extends BasicLookup {

        public name : string;
        public iso2 : string;
        public iso3 : string;
        public nationality : string;
        public numeric : string;
        public latitude : number;
        public longitude : number;
        public arrayOfRisks : CountryRisk[];
        public fips : string;

    public constructor() {
        super();
    }
    
    public getName() {
    
        if (this.name == null) { 
            return "";
        } else {
            return this.name;
        }    
    }
    
    public equals(ctry : Country) : boolean {
       if (this.iso3 != ctry.iso3) {
          return false; 
       } 
       return true;
    }
    
    public getFormattedFullName() : string {
       return this.getName(); 
    }
    
}