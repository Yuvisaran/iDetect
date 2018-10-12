'use strict';

import { DoiBaseInfo } from './DoiBaseInfo';

export class DoiFileCategory extends DoiBaseInfo {
       
    public uid : string;
        
    public category : string;
    public description : string;
    
    public amountOfWords : number;
    public wordLists : string;
    
    public originId : string;
    public orgUnitId : number;
    public listId : string;
    
    public version : number;
    
    public toString() : string {
        let str : string = "";
        str += this.category;
        if (this.amountOfWords) {
            str += "(" + this.amountOfWords;          
            str += ", " + this.wordLists + ")";
        }
        return str;
    }
    
    public getFormattedFullName() : string {
        return this.toString();
    }
}