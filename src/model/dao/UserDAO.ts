'use strict';

import { User } from './../user/User';
import axios from 'axios';
import { Idetect_api_url } from './../../constants/apiUrl';
import { Permission } from './../adm/permissions/Permission';
import { APIConstants } from './../../constants/APIConstants';

import { UserManagementRequestDTO } from './../dto/UserManagementRequestDTO';
import { UserDTO } from './../dto/UserDTO';
import { UsersSessions } from './../adm/UsersSessions/UsersSessions';
import { Country } from './../lookup/Country';
import { Group } from './../adm/group/Group';
import { OrgUnit } from './../adm/orgunit/OrgUnit';
import { Role } from './../adm/role/Role';
import { UserAlgorithmPreferences } from './../user/UserAlgorithmPreferences';
import { UserHistoryPassword } from './../user/UserHistoryPassword';
import { UserLanguagePreferences } from './../user/UserLanguagePreferences';
import { UserPalettePreference } from './../user/UserPalettePreference';
import { UserPreferences } from './../user/UserPreferences';
import { CountryRisk } from './../lookup/CountryRisk';
import { RiskLevel } from './../adm/risk/RiskLevel';
import { FieldDescription } from './../list/FieldDescription';
import { RelationShipType  } from './../st/RelationShipType'; 

export class UserDAO {

    constructor() {    
    }
    
    
    public getAllActiveUser() : Array<User> {
        let userList : Array<User>= [];
        axios.get(Idetect_api_url + APIConstants.getActiveUsers)
            .then(function (response) {
               userList = JSON.parse(response.data.activeUserList);                
            })
            .catch(function (error) {
               console.log(error); 
            });
        return userList; 
    }
    
    public getAddUserRight() : boolean {
        let addUserRight : boolean = false;
        axios.get(Idetect_api_url + APIConstants.getAddRight)
            .then(function (response) {
                addUserRight = JSON.parse(response.data.rightsToAddUser);          
            })
            .catch(function (error) {
                console.log(error) 
            });
        return addUserRight;
    }
    
    public getUserPermission() : Array<Permission> {
        let permission : Array<Permission> = [];
        axios.get(Idetect_api_url + APIConstants.getUserPermission)
            .then(function (response) {
                permission = JSON.parse(response.data.permissionList);
            })
            .catch(function (error) {
                console.log(error);
            });
        return permission;
    }
    
    public getUserPermissionByName(permission : string) : Array<Permission> {
        let permissions : Array<Permission> = [];
        axios.get(Idetect_api_url + APIConstants.getPermissionName + permission)
            .then(function (response) {
                permissions = JSON.parse(response.data.permissionList);
            })
            .catch(function (error) {
                console.log(error);
            }); 
        return permissions;
    }
    
    public postUserSession(userManagementRequestDTO : UserManagementRequestDTO, 
                                user : User, 
                                userDTO : UserDTO, 
                                usersSessions : UsersSessions, 
                                country : Country, 
                                group : Group, 
                                orgunit : OrgUnit, 
                                role : Role, 
                                userAlgorithmPreferences : UserAlgorithmPreferences, 
                                userHistoryPassword : UserHistoryPassword, 
                                userLanguagePreferences : UserLanguagePreferences, 
                                userPalettePreference : UserPalettePreference, 
                                userPreferences : UserPreferences, 
                                countryRisk : CountryRisk, 
                                riskLevel : RiskLevel, 
                                permission : Permission, 
                                fieldDescription : FieldDescription, 
                                relationShipType : RelationShipType)
                                :void /*should we return smth ?*/{
        
        this.post(APIConstants.postUserSession, userManagementRequestDTO, user, userDTO, usersSessions, country, group, orgunit, role, userAlgorithmPreferences, userHistoryPassword,
            userLanguagePreferences, userPalettePreference, userPreferences, countryRisk, riskLevel, permission, fieldDescription, relationShipType); 
    }
    
    public postUser(userManagementRequestDTO : UserManagementRequestDTO, 
                                user : User, 
                                userDTO : UserDTO, 
                                usersSessions : UsersSessions, 
                                country : Country, 
                                group : Group, 
                                orgunit : OrgUnit, 
                                role : Role, 
                                userAlgorithmPreferences : UserAlgorithmPreferences, 
                                userHistoryPassword : UserHistoryPassword, 
                                userLanguagePreferences : UserLanguagePreferences, 
                                userPalettePreference : UserPalettePreference, 
                                userPreferences : UserPreferences, 
                                countryRisk : CountryRisk, 
                                riskLevel : RiskLevel, 
                                permission : Permission, 
                                fieldDescription : FieldDescription, 
                                relationShipType : RelationShipType)
                                : void /*should we return smth ?*/{
    
        this.post(APIConstants.postUserAll, userManagementRequestDTO, user, userDTO, usersSessions, country, group, orgunit, role, userAlgorithmPreferences, userHistoryPassword,
            userLanguagePreferences, userPalettePreference, userPreferences, countryRisk, riskLevel, permission, fieldDescription, relationShipType);
    }
    
    public postUserDelete(userManagementRequestDTO : UserManagementRequestDTO, 
                                user : User, 
                                userDTO : UserDTO, 
                                usersSessions : UsersSessions, 
                                country : Country, 
                                group : Group, 
                                orgunit : OrgUnit, 
                                role : Role, 
                                userAlgorithmPreferences : UserAlgorithmPreferences, 
                                userHistoryPassword : UserHistoryPassword, 
                                userLanguagePreferences : UserLanguagePreferences, 
                                userPalettePreference : UserPalettePreference, 
                                userPreferences : UserPreferences, 
                                countryRisk : CountryRisk, 
                                riskLevel : RiskLevel, 
                                permission : Permission, 
                                fieldDescription : FieldDescription, 
                                relationShipType : RelationShipType)
                                : void /*should we return smth ?*/{
    
        this.post(APIConstants.postUserDelete, userManagementRequestDTO, user, userDTO, usersSessions, country, group, orgunit, role, userAlgorithmPreferences, userHistoryPassword,
            userLanguagePreferences, userPalettePreference, userPreferences, countryRisk, riskLevel, permission, fieldDescription, relationShipType);

    }
    
    public postUserMerge(userManagementRequestDTO : UserManagementRequestDTO, 
                                user : User, 
                                userDTO : UserDTO, 
                                usersSessions : UsersSessions, 
                                country : Country, 
                                group : Group, 
                                orgunit : OrgUnit, 
                                role : Role, 
                                userAlgorithmPreferences : UserAlgorithmPreferences, 
                                userHistoryPassword : UserHistoryPassword, 
                                userLanguagePreferences : UserLanguagePreferences, 
                                userPalettePreference : UserPalettePreference, 
                                userPreferences : UserPreferences, 
                                countryRisk : CountryRisk, 
                                riskLevel : RiskLevel, 
                                permission : Permission, 
                                fieldDescription : FieldDescription, 
                                relationShipType : RelationShipType)
                                : void /*should we return smth ?*/{
        
        this.post(APIConstants.postUserMerge, userManagementRequestDTO, user, userDTO, usersSessions, country, group, orgunit, role, userAlgorithmPreferences, userHistoryPassword,
            userLanguagePreferences, userPalettePreference, userPreferences, countryRisk, riskLevel, permission, fieldDescription, relationShipType);
  
    }
    
    public posrUserPassword(userManagementRequestDTO : UserManagementRequestDTO, 
                                user : User, 
                                userDTO : UserDTO, 
                                usersSessions : UsersSessions, 
                                country : Country, 
                                group : Group, 
                                orgunit : OrgUnit, 
                                role : Role, 
                                userAlgorithmPreferences : UserAlgorithmPreferences, 
                                userHistoryPassword : UserHistoryPassword, 
                                userLanguagePreferences : UserLanguagePreferences, 
                                userPalettePreference : UserPalettePreference, 
                                userPreferences : UserPreferences, 
                                countryRisk : CountryRisk, 
                                riskLevel : RiskLevel, 
                                permission : Permission, 
                                fieldDescription : FieldDescription, 
                                relationShipType : RelationShipType)
                                : void /*should we return smth ?*/ {
        this.post(APIConstants.postUserSavePassword, userManagementRequestDTO, user, userDTO, usersSessions, country, group, orgunit, role, userAlgorithmPreferences, userHistoryPassword,
            userLanguagePreferences, userPalettePreference, userPreferences, countryRisk, riskLevel, permission, fieldDescription, relationShipType);
    }
   
    private post(url : string,
                    userManagementRequestDTO : UserManagementRequestDTO, 
                    user : User, 
                    userDTO : UserDTO, 
                    usersSessions : UsersSessions, 
                    country : Country, 
                    group : Group, 
                    orgunit : OrgUnit, 
                    role : Role, 
                    userAlgorithmPreferences : UserAlgorithmPreferences, 
                    userHistoryPassword : UserHistoryPassword, 
                    userLanguagePreferences : UserLanguagePreferences, 
                    userPalettePreference : UserPalettePreference, 
                    userPreferences : UserPreferences, 
                    countryRisk : CountryRisk, 
                    riskLevel : RiskLevel, 
                    permission : Permission, 
                    fieldDescription : FieldDescription, 
                    relationShipType : RelationShipType) {
        
                if (userManagementRequestDTO == null) {
            return;
        }
        
        axios.post(Idetect_api_url + url, {
            UserManagementRequestDTO : userManagementRequestDTO,
            User : user,
            UserDTO : userDTO,
            UsersSessions : usersSessions,
            Country : country,
            Group : group,
            OrganizationUnit : orgunit,
            Role : role,
            UserAlgorithmPreferences : userAlgorithmPreferences,
            UserHistoryPassword : userHistoryPassword, 
            UserLanguagePreferences : userLanguagePreferences,
            UserPalettePreference : userPalettePreference,
            UserPreferences : userPreferences,
            CountryRisk : countryRisk,
            RiskLevel : riskLevel,
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