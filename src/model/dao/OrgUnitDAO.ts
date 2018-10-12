'use strict';

import { OrgUnit } from './../adm/orgunit/OrgUnit';
import axios from 'axios';
import { Idetect_api_url } from './../../constants/apiUrl';
import { APIConstants } from './../../constants/APIConstants';

import { OrgUnitMgmtReqDTO } from './../dto/OrgUnitMgmtReqDTO';
import { User } from './../user/User';
import { Country } from './../lookup/Country';
import { Group } from './../adm/group/Group';
import { Role } from './../adm/role/Role';
import { UserAlgorithmPreferences } from './../user/UserAlgorithmPreferences';
import { UserHistoryPassword } from './../user/UserHistoryPassword';
import { UserLanguagePreferences } from './../user/UserLanguagePreferences';
import { UserPalettePreference } from './../user/UserPalettePreference';
import { UserPreferences } from './../user/UserPreferences';
import { RiskLevel } from './../adm/risk/RiskLevel';
import { CountryRisk } from './../lookup/CountryRisk';
import { Permission } from './../adm/permissions/Permission';
import { FieldDescription } from './../list/FieldDescription';
import { RelationShipType } from './../st/RelationShipType';

export class OrgUnitDAO {
    
    public getOrgUnitAll() : Array<OrgUnit> {
        
        let orgunitList : Array<OrgUnit> = [];
        
        axios.get(Idetect_api_url + APIConstants.getOrgUnitAll)
            .then(function (response) {
                console.log(response);
                orgunitList = JSON.parse(response.data.orgUnitList);
            })
            .catch(function (error) {
                console.log(error);
            });
        
        return orgunitList;
    }
    
    public getOrgUnitAllActive() : Array<OrgUnit> {
        let orgunitList : Array<OrgUnit> = [];
        
        axios.get(Idetect_api_url + APIConstants.getOrgUnitAllActive)
            .then(function (response) {
                orgunitList = JSON.parse(response.data.orgUnitList);
            })
            .catch(function (error) {
                console.log(error);
            });
        
        
        return orgunitList;
    }
    
    public getOrgUnitCheckByName(orgName : string) : boolean {
        let isPresent : boolean = false;
        axios.get(Idetect_api_url + APIConstants.getOrgUnitCheckByName)
            .then(function (response) {
                isPresent = JSON.parse(response.data.checkByNameStatus);
            })
            .catch(function (error) {
                console.log(error);
            });
        
        return isPresent;
        
    }
    
    public getOrgUnitCheckByCode(orgCode : string) : boolean {
        let isPresent : boolean = false;
        axios.get(Idetect_api_url + APIConstants.getOrgUnitCheckByName)
            .then(function (response) {
                isPresent = JSON.parse(response.data.checkByCodeStatus);
            })
            .catch(function (error) {
                console.log(error);
            });
        
        return isPresent;
        
    }
    
    public postOrgUnitActiveFilter(orgUnitMgmtReqDTO : OrgUnitMgmtReqDTO,
                                    user : User, 
                                    orgUnit : OrgUnit, 
                                    country : Country, 
                                    group : Group, 
                                    role : Role, 
                                    userAlgorithmPreferences : UserAlgorithmPreferences, 
                                    userHistoryPassword : UserHistoryPassword, 
                                    userLanguagePreferences : UserLanguagePreferences, 
                                    userPalettePreference : UserPalettePreference, 
                                    userPreferences : UserPreferences, 
                                    riskLevel : RiskLevel, 
                                    countryRisk : CountryRisk, 
                                    permission : Permission, 
                                    fieldDescription : FieldDescription, 
                                    relationShipType : RelationShipType) {
        
        this.post(APIConstants.postOrgUnitActiveFilter, orgUnitMgmtReqDTO, user, orgUnit, country, group, role, userAlgorithmPreferences, userHistoryPassword, userLanguagePreferences, userPalettePreference, userPreferences, riskLevel, countryRisk, permission, fieldDescription, relationShipType);
    }
          
    public postOrgUnitAllChild(orgUnitMgmtReqDTO : OrgUnitMgmtReqDTO,
                                    user : User, 
                                    orgUnit : OrgUnit, 
                                    country : Country, 
                                    group : Group, 
                                    role : Role, 
                                    userAlgorithmPreferences : UserAlgorithmPreferences, 
                                    userHistoryPassword : UserHistoryPassword, 
                                    userLanguagePreferences : UserLanguagePreferences, 
                                    userPalettePreference : UserPalettePreference, 
                                    userPreferences : UserPreferences, 
                                    riskLevel : RiskLevel, 
                                    countryRisk : CountryRisk, 
                                    permission : Permission, 
                                    fieldDescription : FieldDescription, 
                                    relationShipType : RelationShipType) {
        
        this.post(APIConstants.postOrgUnitAllChild, orgUnitMgmtReqDTO, user, orgUnit, country, group, role, userAlgorithmPreferences, userHistoryPassword, userLanguagePreferences, userPalettePreference, userPreferences, riskLevel, countryRisk, permission, fieldDescription, relationShipType);
    }
    
    public postOrgUnitAllParent(orgUnitMgmtReqDTO : OrgUnitMgmtReqDTO,
                                    user : User, 
                                    orgUnit : OrgUnit, 
                                    country : Country, 
                                    group : Group, 
                                    role : Role, 
                                    userAlgorithmPreferences : UserAlgorithmPreferences, 
                                    userHistoryPassword : UserHistoryPassword, 
                                    userLanguagePreferences : UserLanguagePreferences, 
                                    userPalettePreference : UserPalettePreference, 
                                    userPreferences : UserPreferences, 
                                    riskLevel : RiskLevel, 
                                    countryRisk : CountryRisk, 
                                    permission : Permission, 
                                    fieldDescription : FieldDescription, 
                                    relationShipType : RelationShipType) {
        
        this.post(APIConstants.postOrgUnitAllParent, orgUnitMgmtReqDTO, user, orgUnit, country, group, role, userAlgorithmPreferences, userHistoryPassword, userLanguagePreferences, userPalettePreference, userPreferences, riskLevel, countryRisk, permission, fieldDescription, relationShipType);
    }
    
    public postOrgUnitCreate(orgUnitMgmtReqDTO : OrgUnitMgmtReqDTO,
                                    user : User, 
                                    orgUnit : OrgUnit, 
                                    country : Country, 
                                    group : Group, 
                                    role : Role, 
                                    userAlgorithmPreferences : UserAlgorithmPreferences, 
                                    userHistoryPassword : UserHistoryPassword, 
                                    userLanguagePreferences : UserLanguagePreferences, 
                                    userPalettePreference : UserPalettePreference, 
                                    userPreferences : UserPreferences, 
                                    riskLevel : RiskLevel, 
                                    countryRisk : CountryRisk, 
                                    permission : Permission, 
                                    fieldDescription : FieldDescription, 
                                    relationShipType : RelationShipType) {
        
        this.post(APIConstants.postOrgUnitCreate, orgUnitMgmtReqDTO, user, orgUnit, country, group, role, userAlgorithmPreferences, userHistoryPassword, userLanguagePreferences, userPalettePreference, userPreferences, riskLevel, countryRisk, permission, fieldDescription, relationShipType);
    }
        
    public postOrgUnitDelete(orgUnitMgmtReqDTO : OrgUnitMgmtReqDTO,
                                    user : User, 
                                    orgUnit : OrgUnit, 
                                    country : Country, 
                                    group : Group, 
                                    role : Role, 
                                    userAlgorithmPreferences : UserAlgorithmPreferences, 
                                    userHistoryPassword : UserHistoryPassword, 
                                    userLanguagePreferences : UserLanguagePreferences, 
                                    userPalettePreference : UserPalettePreference, 
                                    userPreferences : UserPreferences, 
                                    riskLevel : RiskLevel, 
                                    countryRisk : CountryRisk, 
                                    permission : Permission, 
                                    fieldDescription : FieldDescription, 
                                    relationShipType : RelationShipType) {
        
        this.post(APIConstants.postOrgUnitDelete, orgUnitMgmtReqDTO, user, orgUnit, country, group, role, userAlgorithmPreferences, userHistoryPassword, userLanguagePreferences, userPalettePreference, userPreferences, riskLevel, countryRisk, permission, fieldDescription, relationShipType);
    }
    
    public postOrgUnitMerge(orgUnitMgmtReqDTO : OrgUnitMgmtReqDTO,
                                    user : User, 
                                    orgUnit : OrgUnit, 
                                    country : Country, 
                                    group : Group, 
                                    role : Role, 
                                    userAlgorithmPreferences : UserAlgorithmPreferences, 
                                    userHistoryPassword : UserHistoryPassword, 
                                    userLanguagePreferences : UserLanguagePreferences, 
                                    userPalettePreference : UserPalettePreference, 
                                    userPreferences : UserPreferences, 
                                    riskLevel : RiskLevel, 
                                    countryRisk : CountryRisk, 
                                    permission : Permission, 
                                    fieldDescription : FieldDescription, 
                                    relationShipType : RelationShipType) {
        
        this.post(APIConstants.postOrgUnitMerge, orgUnitMgmtReqDTO, user, orgUnit, country, group, role, userAlgorithmPreferences, userHistoryPassword, userLanguagePreferences, userPalettePreference, userPreferences, riskLevel, countryRisk, permission, fieldDescription, relationShipType);
    }
    
    public postOrgUnitUpdateLink(orgUnitMgmtReqDTO : OrgUnitMgmtReqDTO,
                                    user : User, 
                                    orgUnit : OrgUnit, 
                                    country : Country, 
                                    group : Group, 
                                    role : Role, 
                                    userAlgorithmPreferences : UserAlgorithmPreferences, 
                                    userHistoryPassword : UserHistoryPassword, 
                                    userLanguagePreferences : UserLanguagePreferences, 
                                    userPalettePreference : UserPalettePreference, 
                                    userPreferences : UserPreferences, 
                                    riskLevel : RiskLevel, 
                                    countryRisk : CountryRisk, 
                                    permission : Permission, 
                                    fieldDescription : FieldDescription, 
                                    relationShipType : RelationShipType) {
        
        this.post(APIConstants.postOrgUnitUpdateLink, orgUnitMgmtReqDTO, user, orgUnit, country, group, role, userAlgorithmPreferences, userHistoryPassword, userLanguagePreferences, userPalettePreference, userPreferences, riskLevel, countryRisk, permission, fieldDescription, relationShipType);
    }
    
    private post(url : string, orgUnitMgmtReqDTO : OrgUnitMgmtReqDTO, user : User, orgUnit : OrgUnit, country : Country, group : Group, role : Role, userAlgorithmPreferences : UserAlgorithmPreferences, userHistoryPassword : UserHistoryPassword, userLanguagePreferences : UserLanguagePreferences, userPalettePreference : UserPalettePreference, userPreferences : UserPreferences, riskLevel : RiskLevel, countryRisk : CountryRisk, permission : Permission, fieldDescription : FieldDescription, relationShipType : RelationShipType) {
        
        axios.post(Idetect_api_url + url, {
            OrgUnitMgmtReqDTO : orgUnitMgmtReqDTO,
            User : user, 
            OrganizationUnit : orgUnit, 
            Country : country, 
            Group : group, 
            Role : role, 
            UserAlgorithmPreferences : userAlgorithmPreferences, 
            UserHistoryPassword : userHistoryPassword, 
            UserLanguagePreferences : userLanguagePreferences, 
            UserPalettePreference : userPalettePreference, 
            UserPreferences : userPreferences, 
            RiskLevel : riskLevel, 
            CountryRisk : countryRisk, 
            Permission : permission, 
            FieldDescription : fieldDescription, 
            RelationShipType : relationShipType
        })
        .then(function (response) {
            //do smth ?
        })
        .catch(function (error) {
            console.log(error);
        });
    
    }  
    
}