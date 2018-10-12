'use strict';

import { DoiBaseInfo } from './DoiBaseInfo';

export class DoiNickName extends DoiBaseInfo {
    
    
    public uid : string;
    public uidTbl : string;
    public nickName : string;
    public lastName : string; 
    public firstName : string; 
    public info : string;
    public inUse : string;
    public usedSince : Date;
    public usedStop : Date;
    public listId : string;
    public originId : string;
    public version : number;
    public nickNameConcat : string;   
    
    constructor() {
        super(); 
    }

    public toString() : string {
        if (this.lastName != null) {
            let tmpFullName : string = "";
            if (this.lastName != null) {
                if (this.lastName.length > 0)
                    tmpFullName += this.lastName.toUpperCase();
            }
            if (this.firstName != null) {
                if (this.firstName.length > 1)
                    tmpFullName += ", " + this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1,this.firstName.length).toLowerCase();   
            }   
        
            return tmpFullName; 
        } else if (this.nickName != null) {
            return this.nickName;
        } else if (this.info != null) { 
            return this.info;
        }
            
        return "";
    }
    
    public getFormattedFullName() : string {
        return this.toString();
    }
}