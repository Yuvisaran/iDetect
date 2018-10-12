'use strict';

import { User } from './../user/User';
import { OrgUnit } from './../adm/orgunit/OrgUnit';

export class OrgUnitMgmtReqDTO  {
  
    public comment : string;
    public currentUser : User;
    public maxSize : number;
    public orgUnit : OrgUnit;
    public orgUnitCode : string;
    public orgUnitName : string;
    public orgUnits : Array<OrgUnit>;
    
}