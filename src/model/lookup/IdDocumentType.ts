'use strict'

import { BasicLookup } from './BasicLookup';

export class IdDocumentType extends BasicLookup {
    
    public documentType : string;    
    public description : string;
    public country : string;
    
    constructor() {
        super();    
    }
    
}