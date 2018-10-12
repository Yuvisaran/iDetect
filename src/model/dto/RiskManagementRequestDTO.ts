'use strict';

import { OrgUnit } from './../adm/orgunit/OrgUnit';
import { User } from './../user/User';


export class RiskManagementRequestDTO  {
  
    public comment : string;
    public maxSize : number;
    public orgunit : OrgUnit;
    public page : number;
    public user : User;
    
}