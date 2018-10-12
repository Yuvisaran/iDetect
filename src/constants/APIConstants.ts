'use strict';

export class APIConstants {
    
    //User mgmt
    public static getActiveUsers : string = '/user/active/users';
    public static getAddRight : string = '/user/add/rights';
    public static getUserPermission : string = '/user/all/permission';
    public static postUserAll : string = '/user/all';
    public static postUserSession : string = '/user/all/session';
    public static postUserDelete : string = '/user/delete';
    public static postUserMerge : string = '/user/merge';
    public static getPermissionName : string = '/user/permission/name/';
    public static postUserSavePassword : string = '/user/save/password';
    
    //group mgmt
    public static getActiveGroup : string = '/group/active/group';
    public static getGroupActiveRole : string = '/group/active/role';
    public static postGroupAll : string = '/group/all';
    public static postGroupAllRole : string = '/group/all/role';
    public static postGroupDelete : string = '/group/delete';
    public static postGroupMerge : string = '/group/merge';
    
    //role mgmt
    public static getRolePermission : string = '/role/check/permission/';
    public static postRoleDelete : string = '/role/delete';
    public static postRoleMerge : string = 'role/merge';
    
    //orgUnit
    public static getOrgUnitAll : string = '/orgunit/all';
    public static getOrgUnitAllActive : string = '/orgunit/all/active';
    public static getOrgUnitCheckByName : string = '/orgunit/check/byname/';
    public static getOrgUnitCheckCode : string = '/orgunit/check/code/';
    public static postOrgUnitActiveFilter : string = '/orgunit/active/filter';
    public static postOrgUnitAllChild : string = '/orgunit/all/child';
    public static postOrgUnitAllParent : string = '/orgunit/all/parent';
    public static postOrgUnitCreate : string = '/orgunit/create';
    public static postOrgUnitDelete : string = '/orgunit/delete';
    public static postOrgUnitMerge : string = '/orgunit/merge';
    public static postOrgUnitUpdateLink : string = '/orgunit/update/link';
    
    //risk
    public static postRiskAll : string = '/risk/all';
    public static postRiskMerge : string = '/risk/merge';
    
    //login
    public static getLoginInitLogin : string ='/logincontroller/initlogin';
    public static postLogin : string = '/logincontroller/login';
    
    //Alert
    public static getAlertEntityCommentWithHistory : string = '/alert/get/entitycomment/withhistory/';
    public static getAlertKPIList : string = '/alert/get/kpi/list/';
    public static getAlertInitWorkflowStatus : string = '/alert/init/workflow/status';
    public static postAlertChangeStatus : string = '/alert/change/alert/status';
    public static postAlertChangeCaseStatus : string = '/alert/change/case/status';
    public static postAlertDownloadDocument : string = '/alert/download/document';
    public static postAlertGetUserDashboardPreferences : string = '/alert/get/user/dashboard/preferences';
    public static postAlertInitCaseStatus : string = '/alert/init/case/status';
    public static postAlertInitLinkchartStatus : string = '/alert/init/linkchart/status';
    public static postAlertInitStatus : string = '/alert/init/status';
    public static postAlertMainAlertFilter : string = '/alert/main/alert/filter';
    public static postAlertMainAll : string = '/alert/main/all';
    public static postAlertMainAuditLog : string = '/alert/main/audit/log';
    public static postAlertMainByUser : string = '/alert/main/byuser';
    public static postAlertMainCasesFilter : string = '/alert/main/cases/filter';
    public static postAlertLinkchartFilter : string = '/alert/main/linkchart/filter';
    public static postAlertMainRelationShipTypeEntity : string = '/alert/main/relationshiptype/entity';    
    public static postAlertSaveUserDashboardPreferences : string = '/alert/save/dashboard/preferences';
    public static postAlertUpdateEntitiesDate : string = '/alert/update/entities/data';
    public static postAlertUpdateEntitiesDataWithKPI : string = '/alert/update/entities/with/kpi';
    public static postAlertUpdateEntityCommentForEntity : string = '/alert/update/entity/comment/forentity';
    public static postAlertUploadDocument : string = '/alert/upload/document'; 
    
    
    
}