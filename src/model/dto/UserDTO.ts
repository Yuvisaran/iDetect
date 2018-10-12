'use strict';

import { Group } from './../adm/group/Group';
import { OrgUnit } from './../adm/orgUnit/OrgUnit';

export class UserDTO {
    public availableOrgUnits : Array<string>;
    public group : Array<Group>;
    public id : number;
    public name : string;
    public orgUnits : Array<OrgUnit>;
    public password : string;
    public userId : string;
}