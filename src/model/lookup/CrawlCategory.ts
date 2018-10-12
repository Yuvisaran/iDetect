'use strict'

import { BasicLookup } from './BasicLookup';

export class CrawlCategory extends BasicLookup {
    
    public name : string;    
    public description : string;
    public content : string;
    
    constructor() {
        super();    
    }
}