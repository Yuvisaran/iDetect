import { OrgUnit } from './../adm/orgunit/OrgUnit';
import { Group } from './../adm/group/Group';

export class RuleSecurity {
  public uid: string;
  public ruleId: string;
  public description: string;
  public userId: string;
  public groupId: number;
  public orgunitId: string;
  public group: Group;
  public orgUnit: OrgUnit;
  public permission: string;
  public creationUser: string;
  public creationDtg: Date;
  public deletionUser: string;
  public deletionDtg: Date;
  public deleteStatus: string;
}
