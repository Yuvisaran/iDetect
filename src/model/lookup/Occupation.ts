'use strict';

import { BasicLookup } from './BasicLookup';

export class Occupation extends BasicLookup {
    
    public level : string;
    public description : string;
    public code : string;
    public isoCode : string;
    public arrayOfRisks : string[];
    
    constructor() {
       super(); 
    }
    
    public equals(prof : Occupation) : boolean {
       if (this.uid != prof.uid) {
          return false; 
       }
       if (this.description != prof.description) {
          return false; 
       } 
        
       return true;
    }
    
    public getFormattedFullName() : string {
       return this.description; 
    }
    
}