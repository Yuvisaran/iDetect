'use strict';

import { DoiBaseInfo } from './DoiBaseInfo';

export class DoiWordCount extends DoiBaseInfo {
 
    public uid : string;
    public words : string;
    public category : string;
    public amount : number;
    public uidTbl : string;  
    
    public getFormattedFullName() : string {
        return this.words;
    }
    
}