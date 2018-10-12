'use script';

import { DoiBaseInfo } from './DoiBaseInfo';

export class DoiSource extends DoiBaseInfo {
   
    public uid : string;

    public originalUid : string;
    
    public uidTbl : string;
    public listId : number;
    
    public sourceUrl : string;
    public sourceCms : string;    
    
    constructor() {
        super(); 
    }
    
    public equals(tmpSource : DoiSource) : boolean {
            if (tmpSource != null) {
                if (this.sourceUrl == tmpSource.sourceUrl)
                    return true;
            }
            return false;
        }
        
    public getFormattedFullName() : string {
        return this.sourceUrl;
    }
}