'use strict';

import { User } from './../user/User';
import { Role } from './../adm/role/Role';

export class RoleManagementRequestDTO {
  
    public comment : string;
    public currentUser : User;
    public role : Role;
    
}