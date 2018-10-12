'use strict'

import { BasicLookup } from './BasicLookup';

export class KPICategory extends BasicLookup {
    
    public category : string;    
    public subCategory : string;
    public type : string;
    public entityType : string;
    public mandatory : boolean;
    public diplayLabel : string;
    
    constructor() {
        super();    
    }
    
    public getFormattedFullName() : string {
        return this.subCategory;   
    }
}