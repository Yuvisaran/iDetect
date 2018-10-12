'use strict'

import { BasicLookup } from './BasicLookup';

export class AdditionalInfoCategoryRisk extends BasicLookup {
    
    public typeRisk : string;    
    public value : number;
    public _categoryId : string;
    public categoryCode : string;
    
    constructor() {
        super();    
    }
    
    public get categoryId() : string {
        return this._categoryId;   
    }
    
    public set categoryId(category : string) {
        this._categoryId = category;
    }
        
}