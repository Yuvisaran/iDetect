'use strict'

import { BasicLookup } from './BasicLookup';

export class ExceptionName extends BasicLookup {
    
    public word : string;    
    public language : string;
    public type : string;
    public exception : string;
    
    constructor() {
        super();    
    }
}