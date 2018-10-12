'use strict'

import { BasicLookup } from './BasicLookup';

export class LastName extends BasicLookup {
    
    public lastName : string;    
    public origin : string;
    public meaning : string;
    public variants : string;
    public source : string;
    public language : string;
    
    constructor() {
        super();    
    }
}