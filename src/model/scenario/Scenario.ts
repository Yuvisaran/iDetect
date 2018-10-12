import { Rules } from './Rules';
import { RuleSecurity } from './RuleSecurity';
import { ScenarioRuleAssociation } from './ScenarioRuleAssociation';

export class Scenario {
  public id: string;
	public type: string;
	public created: Date;
	public updated: Date;
	public createdBy: string;
	public updatedBy: string;
	public fileName: string;
	public version: number;
	public description: string;
	public status: string;
	public rules: Array<Rules>;
	public rulesAssociation: Array<ScenarioRuleAssociation>;
	public arrayOfRuleSecurity: Array<RuleSecurity>;
}
