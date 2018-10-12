'use strict';

import { User } from './../user/User';
import { UserDTO } from './UserDTO';
import { UsersSessions } from './../adm/UsersSessions/UsersSessions';

export class UserManagementRequestDTO {
    public changeRequired : boolean;
    public comment : string;
    public currentUser : User;
    public currentUserDTO : UserDTO;
    public duplicateMode : boolean;
    public filtCrit : UsersSessions;
    public filterCritUser : User;
    public filterType : string;
    public maxSize : number;
    public originalUserName : string;
    public page : number;
    public pwd : string;
    public userDTO : UserDTO;
    public userId : string;
}