'use strict';

import { Permission } from './../model/adm/permissions/Permission';
import { User } from './../model/user/User';

export class DataConstant {
  
    //permission list
    private permissionList : Array<Permission>;
    private userLoggedIn : User;
    
    public setPermissionList(permissions : Array<Permission>) {
        this.permissionList = permissions;
    }
    
    public setUserLoggedIn(user : User) {
        this.userLoggedIn = user;
    }
    
    
    
}