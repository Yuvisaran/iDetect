import { OrgUnit } from './../adm/orgunit/OrgUnit';
import { RuleSecurity } from './RuleSecurity';
import { RulesPeriodicity } from './RulesPeriodicity';

export class Rules {
  public id: string;
  public ruleName: string;
  public condition: string;
  public action: string;
  public created: Date;
  public updated: Date;
  public createdBy: string;
  public updatedBy: string;
  public description: string;
  public status: string;
  public ownedBy: string;
  public type: number;
  public ruleActivationGroup: string;
  public organizationUnit: OrgUnit;
  public rulesPeriodicity: RulesPeriodicity;
  public rulePeriodicityParam: number;
  public arrayOfRuleSecurity:Array<RuleSecurity>;

  public validateComment: string;
  public version: number;
  public versionDate: Date;
  public outdated: boolean;
}
