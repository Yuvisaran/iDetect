'use strict';

import { Role } from './../role/Role';
import { User } from './../../user/User';

export class Group{
    
    public id : number;
    public name : string;
    public description : string;
    public email : string;
    public active : boolean;
    public deleted : boolean;
    public user : Array<User>; 
    public role : Array<Role>;
    public triActive : number;
    
    // Common Application Field
    public createdOn : Date;
    public updatedOn : Date;
    public createdBy : string;
    public updatedBy : string;       
    
    constructor() {
    
    }
    
    public setUsers(user : Array<User>) :void {
        if (user == null) {
            return;
        }
        
        if (user.length == 0) {
            return;
        }
        
        this.user = [];
        this.user = user;
    }
    
    public setRoles(role : Array<Role>) :void {
        if (role == null) {
            return;
        }
        
        if (role.length == 0) {
            return;
        }
        
        this.role = [];
        this.role = role;
    }
    
}