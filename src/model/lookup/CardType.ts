'use strict'

import { BasicLookup } from './BasicLookup';

export class CardType extends BasicLookup {
    
    public type : string;    
    public description : string;
    public descriptionUi : string;
    
    constructor() {
        super();    
    }
    
    public toString() : string {
        return this.getFormattedFullName();    
    }
    
    private getFormattedFullName() : string {
        if (this.description != null) {
            return this.description;   
        } else {
            return "";
        }
    }
}