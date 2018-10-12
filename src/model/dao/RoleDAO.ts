'use strict';

import axios from 'axios';
import { Idetect_api_url } from './../../constants/apiUrl';
import { APIConstants } from './../../constants/APIConstants';

import { Permission } from './../adm/permissions/Permission';
import { RoleManagementRequestDTO } from './../dto/RoleManagementRequestDTO';
import { User } from './../user/User';
import { Role } from './../adm/role/Role';
import { Country } from './../lookup/Country';
import { Group } from './../adm/group/Group';
import { OrgUnit } from './../adm/orgunit/OrgUnit';
import { UserAlgorithmPreferences } from './../user/UserAlgorithmPreferences';
import { UserHistoryPassword } from './../user/UserHistoryPassword';
import { UserLanguagePreferences } from './../user/UserLanguagePreferences';
import { UserPalettePreference } from './../user/UserPalettePreference';
import { UserPreferences } from './../user/UserPreferences';
import { CountryRisk } from './../lookup/CountryRisk';
import { RiskLevel } from './../adm/risk/RiskLevel';
import { FieldDescription } from './../list/FieldDescription';
import { RelationShipType } from './../st/RelationShipType';

export class RoleDAO {
    
    public getRoleCheckPermission(userId : string) : Array<Permission> {
        
        let permissionData : Array<Permission> = [];    
        
        axios.get(Idetect_api_url + APIConstants.getRolePermission)
            .then(function (response) {
                permissionData = JSON.parse(response.data.permissionData);
            })
            .catch(function (error) {
                console.log(error);
            });
     
        return permissionData;

    }
    
    public postRoleDelete(roleManagementRequestDTO : RoleManagementRequestDTO,
                            user : User,
                            role : Role,
                            country : Country,
                            group : Group,
                            orgunit : OrgUnit,
                            userAlgorithmPreferences : UserAlgorithmPreferences,
                            userHistoryPassword : UserHistoryPassword,
                            userLanguagePreferences : UserLanguagePreferences,
                            userPalettePreference : UserPalettePreference,
                            userPreferences : UserPreferences,
                            permission : Permission,
                            countryRisk : CountryRisk,
                            riskLevel : RiskLevel, 
                            fieldDescription : FieldDescription,
                            relationShipType : RelationShipType) : void {
        this.post(APIConstants.postRoleDelete, roleManagementRequestDTO, user, role, country, group, orgunit, userAlgorithmPreferences, userHistoryPassword, userLanguagePreferences, userPalettePreference, userPreferences, permission, countryRisk, riskLevel, fieldDescription, relationShipType);    
    }
    
    public postRoleMerge(roleManagementRequestDTO : RoleManagementRequestDTO,
                            user : User,
                            role : Role,
                            country : Country,
                            group : Group,
                            orgunit : OrgUnit,
                            userAlgorithmPreferences : UserAlgorithmPreferences,
                            userHistoryPassword : UserHistoryPassword,
                            userLanguagePreferences : UserLanguagePreferences,
                            userPalettePreference : UserPalettePreference,
                            userPreferences : UserPreferences,
                            permission : Permission,
                            countryRisk : CountryRisk,
                            riskLevel : RiskLevel, 
                            fieldDescription : FieldDescription,
                            relationShipType : RelationShipType) : void {
        this.post(APIConstants.postRoleMerge, roleManagementRequestDTO, user, role, country, group, orgunit, userAlgorithmPreferences, userHistoryPassword, userLanguagePreferences, userPalettePreference, userPreferences, permission, countryRisk, riskLevel, fieldDescription, relationShipType);    
    }
    
    
    private post(url : string, 
                roleManagementRequestDTO : RoleManagementRequestDTO,
                user : User,
                role : Role,
                country : Country,
                group : Group,
                orgunit : OrgUnit,
                userAlgorithmPreferences : UserAlgorithmPreferences,
                userHistoryPassword : UserHistoryPassword,
                userLanguagePreferences : UserLanguagePreferences,
                userPalettePreference : UserPalettePreference,
                userPreferences : UserPreferences,
                permission : Permission,
                countryRisk : CountryRisk,
                riskLevel : RiskLevel, 
                fieldDescription : FieldDescription,
                relationShipType : RelationShipType) : void {
        
        axios.post(Idetect_api_url + url, {
            RoleManagementRequestDTO : roleManagementRequestDTO,
            User : user,
            Role : role,
            Country : country,
            Group : Group,
            OrganizationUnit : orgunit,
            UserAlgorithmPreferences : userAlgorithmPreferences,
            UserHistoryPassword : userHistoryPassword,
            UserLanguagePreferences : userLanguagePreferences,
            UserPalettePreference : userPalettePreference,
            UserPreferences : userPreferences,
            Permission : permission,
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