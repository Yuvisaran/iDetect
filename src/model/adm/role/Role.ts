'use strict';

import { User } from './../../user/User';
import { Group } from './../group/Group';
import { Permission } from './../permissions/Permission';

export class Role {

    public id : number;
    public name : string;
    public description : string;
    public active : boolean;
    public deleted : boolean;
    public permission : Array<Permission>;
    
    // Common Application Field
    public createdOn : Date;
    public updatedOn : Date;
    public createdBy : string;
    public updatedBy : string;
    public triActive : number;
     
    //In case of needed
    public user : Array<User>;
    public group : Array<Group>;  
    
    constructor() {
    }
    
    public setPermissions(permission: Array<Permission>) :void {
        if (permission == null) {
            return;
        }
        
        if (permission.length == 0) {
            return ;
        }
        
        this.permission = [];
        this.permission = permission;
    }
}