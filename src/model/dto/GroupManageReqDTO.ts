'use strict';

import { Group } from './../adm/group/Group';
import { User } from './../user/User';
import { Role } from './../adm/role/Role';

export class GroupManageReqDTO {
    public comment : string;
    public filterType : string;
    public group : Group;
    public maxSize : number;
    public page : number;
    public role : Role;
    public user : User;
}