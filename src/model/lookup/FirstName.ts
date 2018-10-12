'use strict'

import { BasicLookup } from './BasicLookup';

export class FirstName extends BasicLookup {
    
    public firstName : string;    
    public origin : string;
    public sex : string;
    public meaning : string;
    public variants : string;
    public source : string;
    public language : string;
 
    constructor() {
        super();    
    }
}