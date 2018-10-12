'use strict'

import { BasicLookup } from './BasicLookup';

export class Categorization extends BasicLookup {
    
    public dataType : string;    
    public levelId : string;
    public categoryType : string;
    public subCategory : string;
    public subCategoryUid : string;
       
    constructor() {
        super();    
    }
 
}