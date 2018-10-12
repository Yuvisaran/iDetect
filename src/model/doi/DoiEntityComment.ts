'use strict';

import { DoiBaseInfo } from './DoiBaseInfo';

export class DoiEntityComment extends DoiBaseInfo {
   
    public uid : string;
    public comment : string;
    
    public uidTbl : string;   
    public listId : string;
    public originalId : string;
    public version : number;
            
    constructor(incomment : DoiEntityComment = null) {
        super();
        if (incomment != null) {
            this.uid = incomment.uid;
            this.uidTbl = incomment.uidTbl;
            this.comment = incomment.comment;
            this.listId = incomment.listId;
            this.originalId = incomment.originalId;
            this.version = incomment.version;
        }
        
    }
}