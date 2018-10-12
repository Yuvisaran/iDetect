'use strict';

import { BasicLookup } from './BasicLookup';

export class ListException extends BasicLookup {
    
    public typeRisk : string;
    public value : string;
    public _occupationId : string;
    public occupationName : string;
    
    constructor() {
       super(); 
    }
    
    public get occupationId() : string {
       return this._occupationId; 
    }
    
    public set occupationId(occupation : string) {
          this._occupationId = occupation; 
    } 
    
    
}