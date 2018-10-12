'use strict';

import { User } from './../../user/User';



//TODO rewrite this one, what do we expect in statusList ?
export class Workflow {
    
    public id : number;
    public name : string;
    public description : string;
    public deleted : boolean;
    public type : string;
    public defaultWorkflow : boolean;
    public triDefaultWorkflow : number;
    
    // Common Application Field
    public createdOn : Date;
    public updatedOn : Date;
    public createdBy : string;
    public updatedBy : string;
    
    public owner : User;
    
    public statusList : string[]; 
    
    /*
    public get status() : string[][] {
        let status : string[][]; 
        
        if (!this.statusList) {
            return status;
        }
        
        let i : number;
        let total : number = this.statusList.length;
        for (i = 0; i < total; i++) {
            status.push(this.statusList[i]);
        }
        
        return array;
    }*/
    
}