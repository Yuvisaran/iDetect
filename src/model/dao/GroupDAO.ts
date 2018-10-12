'use strict';

import { Group } from './../adm/group/Group';
import axios from 'axios';
import { Idetect_api_url } from './../../constants/apiUrl';
import { APIConstants } from './../../constants/APIConstants';
import { Role } from './../adm/role/Role';
import { GroupManageReqDTO } from './../dto/GroupManageReqDTO';

import { User } from './../user/User';
import { Permission } from './../adm/permissions/Permission';
import { Country } from './../lookup/Country';
import { OrgUnit } from './../adm/orgunit/OrgUnit';
import { UserAlgorithmPreferences } from './../user/UserAlgorithmPreferences';
import { UserLanguagePreferences } from './../user/UserLanguagePreferences';
import { UserPalettePreference } from './../user/UserPalettePreference';
import { UserHistoryPassword } from './../user/UserHistoryPassword';
import { UserPreferences } from './../user/UserPreferences';
import { CountryRisk } from './../lookup/CountryRisk';
import { RiskLevel } from './../adm/risk/RiskLevel';
import { FieldDescription } from './../list/FieldDescription';
import { RelationShipType } from './../st/RelationShipType';



export class GroupDAO {

    public getActiveGroup() : Array<Group> {
        let groupList : Array<Group> = [];
        
        axios.get(Idetect_api_url  +APIConstants.getActiveGroup)
            .then(function (response) {
                groupList = JSON.parse(response.data.activeGroupList);
            })
            .catch(function (error) {
                console.log(error); 
            });
        
        return groupList;
    }
    
    public getActiveRole() : Array<Role> {
        let roleList : Array<Role> = [];
        
        axios.get(Idetect_api_url + APIConstants.getGroupActiveRole)
            .then(function (response) {
                roleList = JSON.parse(response.data.activeRoles);
            })
            .catch(function (error) {
                console.log(error);
            });
        
        return roleList;
    }
    
    public postGroupAll(groupManageReqDTO : GroupManageReqDTO, 
                group : Group,
                role : Role, 
                user : User, 
                permission : Permission, 
                country : Country,  
                orgunit : OrgUnit, 
                userAlgorithmPreferences : UserAlgorithmPreferences, 
                userHistoryPassword : UserHistoryPassword, 
                userLanguagePreferences : UserLanguagePreferences,
                userPalettePreference : UserPalettePreference,
                userPreferences : UserPreferences, 
                countryRisk : CountryRisk, 
                riskLevel : RiskLevel, 
                fieldDescription : FieldDescription, 
                relationShipType : RelationShipType) {
        
        this.post(APIConstants.postGroupAll, groupManageReqDTO, group, role, user, permission, country, orgunit, userAlgorithmPreferences, userHistoryPassword, userLanguagePreferences, userPalettePreference, userPreferences, countryRisk, riskLevel, fieldDescription, relationShipType);   
    }
    
    public postGroupAllRole(groupManageReqDTO : GroupManageReqDTO, 
                group : Group,
                role : Role, 
                user : User, 
                permission : Permission, 
                country : Country,  
                orgunit : OrgUnit, 
                userAlgorithmPreferences : UserAlgorithmPreferences, 
                userHistoryPassword : UserHistoryPassword, 
                userLanguagePreferences : UserLanguagePreferences,
                userPalettePreference : UserPalettePreference,
                userPreferences : UserPreferences, 
                countryRisk : CountryRisk, 
                riskLevel : RiskLevel, 
                fieldDescription : FieldDescription, 
                relationShipType : RelationShipType) {
        
        this.post(APIConstants.postGroupAllRole, groupManageReqDTO, group, role, user, permission, country, orgunit, userAlgorithmPreferences, userHistoryPassword, userLanguagePreferences, userPalettePreference, userPreferences, countryRisk, riskLevel, fieldDescription, relationShipType);   
    }
    
    public postGroupDelete(groupManageReqDTO : GroupManageReqDTO, 
                group : Group,
                role : Role, 
                user : User, 
                permission : Permission, 
                country : Country,  
                orgunit : OrgUnit, 
                userAlgorithmPreferences : UserAlgorithmPreferences, 
                userHistoryPassword : UserHistoryPassword, 
                userLanguagePreferences : UserLanguagePreferences,
                userPalettePreference : UserPalettePreference,
                userPreferences : UserPreferences, 
                countryRisk : CountryRisk, 
                riskLevel : RiskLevel, 
                fieldDescription : FieldDescription, 
                relationShipType : RelationShipType) {
        
        this.post(APIConstants.postGroupDelete, groupManageReqDTO, group, role, user, permission, country, orgunit, userAlgorithmPreferences, userHistoryPassword, userLanguagePreferences, userPalettePreference, userPreferences, countryRisk, riskLevel, fieldDescription, relationShipType);   
    }
    
        public postGroupMerge(groupManageReqDTO : GroupManageReqDTO, 
                group : Group,
                role : Role, 
                user : User, 
                permission : Permission, 
                country : Country,  
                orgunit : OrgUnit, 
                userAlgorithmPreferences : UserAlgorithmPreferences, 
                userHistoryPassword : UserHistoryPassword, 
                userLanguagePreferences : UserLanguagePreferences,
                userPalettePreference : UserPalettePreference,
                userPreferences : UserPreferences, 
                countryRisk : CountryRisk, 
                riskLevel : RiskLevel, 
                fieldDescription : FieldDescription, 
                relationShipType : RelationShipType) {
        
        this.post(APIConstants.postGroupMerge, groupManageReqDTO, group, role, user, permission, country, orgunit, userAlgorithmPreferences, userHistoryPassword, userLanguagePreferences, userPalettePreference, userPreferences, countryRisk, riskLevel, fieldDescription, relationShipType);   
    }
    
    
    private post(url : string,
                groupManageReqDTO : GroupManageReqDTO, 
                group : Group,
                role : Role, 
                user : User, 
                permission : Permission, 
                country : Country,  
                orgunit : OrgUnit, 
                userAlgorithmPreferences : UserAlgorithmPreferences, 
                userHistoryPassword : UserHistoryPassword, 
                userLanguagePreferences  : UserLanguagePreferences,
                userPalettePreference : UserPalettePreference,
                userPreferences : UserPreferences, 
                countryRisk : CountryRisk, 
                riskLevel : RiskLevel, 
                fieldDescription : FieldDescription, 
                relationShipType : RelationShipType) {
        
                if (groupManageReqDTO == null) {
            return;
        }
        
        axios.post(Idetect_api_url + url, {
            GroupManageReqDTO  : groupManageReqDTO,
            Group : group,
            Role : role,
            User : user,
            Permission : permission,
            Country : country,
            OrganizationUnit : orgunit,
            UserAlgorithmPreferences : userAlgorithmPreferences,
            UserHistoryPassword : userHistoryPassword, 
            UserLanguagePreferences : userLanguagePreferences,
            UserPalettePreference : userPalettePreference,
            UserPreferences : userPreferences,
            CountryRisk : countryRisk,
            RiskLevel : riskLevel,
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