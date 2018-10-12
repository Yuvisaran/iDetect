'use strict';

import { User } from './../user/User';
import { MultiSelectPreferences } from './../multiselect/MultiSelectPreferences';
import { ListDetails } from './../list/ListDetails';
import { UserDashBoardPreferences } from './../user/UserDashBoardPreferences';
import { Scenario } from './../scenario/Scenario';


export class LoginInfoDTO {

    public user : User;
    public allInternalListListDescription: Array<ListDetails>;
    public allDoiListDescription: Array<ListDetails>;
    public getAllFifoSearch: Array<string>;
    public userList: Array<User>;
    public multiSelectPreferences: MultiSelectPreferences;
    public singleSelectPreferences: MultiSelectPreferences;
    public scenarioTypeList: Array<Scenario>;
    public analysisGridView: MultiSelectPreferences;
    public exportPreferences: MultiSelectPreferences;
    public alertList: Array<string>;
    public caseAlert: Array<string>;
    public userDashBoardPreferences: UserDashBoardPreferences;
    public alertListDetails: ListDetails;
    public caseListDetails: ListDetails;
    public workflowStatusClosed: Array<number>;
    public workflowStatusOpen: Array<number>;
    public workflowStatusAlertClosed: Array<number>;
    public workflowStatusAlertOpen: Array<number>;
    public workflowStatusCaseClosed: Array<number>;
    public workflowStatusCaseOpen: Array<number>;
    
}
