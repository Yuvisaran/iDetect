'use strict';

import { Role } from './../adm/role/Role';
import { Group } from './../adm/group/Group';
import { Country } from './../lookup/Country';
import { OrgUnit } from './../adm/orgunit/OrgUnit';
import { UserPreferences } from './UserPreferences';
import { UserHistoryPassword } from './UserHistoryPassword';
import { UserPalettePreference } from './UserPalettePreference';
import { UserLanguagePreferences } from './UserLanguagePreferences';
import { UserAlgorithmPreferences } from './UserAlgorithmPreferences';

export class User{
        
    public id:Number;
    public userId : string;
    public name: string;
    public firstName : string;
    public lastName : string;
    public fullName : string;
    public email : string;
    public phone : string;
    public location : Country;
    public active : boolean;
    public locked : boolean;
    public lastLoginTime : number;
    public userPreferences : UserPreferences;
    public userAlgorithmPreferences : UserAlgorithmPreferences ;
    public orgunitId : number;
    public groups : Array<Group>;
    public roles : Array<Role>;
    public orgUnits : Array<OrgUnit>;                            // Contains the full org unit
    public domains : string[]; //not sure what used for
    public loginAttempts : number;
    public orgUnit : OrgUnit;
    public availablePerms : number[];
    public availableOrgUnits : string[];                   //Contains the Org Id's as string
    public availableLists : string[];
    public userPalettePreference : Array<UserPalettePreference>;
    public triActive : number;
    public userLanguagePreferences : UserLanguagePreferences;
    public userHistoryPasswords : Array<UserHistoryPassword>;
    public overflowTransactionLimit : number;
    
    //Pwd stuff
    public pep : String;                                          //Password Expiry Period
    public mit : String;                                          //Maximum Inactivity Time
    public passwordSetOn : Date;
    public password : string;
    public deleted : string;
    public license : boolean;                                     //Puts if the license is accepted or not, once for every new user.
    public passwordChangeRequired : boolean;                      //If the user must change its password at the app start after a password change done 
                                                                    //by an admin.      
    // Common Application Field
    public createdOn : Date;
    public updatedOn : Date;
    public createdBy : string;
    public updatedBy : string;
    
    //Subject to remove, brought in to avoid errors in log
    public country : Country; //duplicate with location ?
    
    constructor() {
        this.userPreferences = new UserPreferences();   
    }
    
    public getFullName() : string {
        return this.firstName + " " + this.lastName;
    }
    
    public setGroups(group : Array<Group>) : void {
        if (group == null) {
            return;
        }
        
        if (group.length == 0) {
            return;
        }
        
        this.groups = [];
        this.groups = group;
    }
    
    public setRoles(role : Array<Role>) : void {
        if (role == null) {
            return;
        }
        
        if (role.length == 0) {
            return;
        }
        
        this.roles = [];
        this.roles = role;   
    }
    
    public setOrganizationUnits(orgUnit : Array<OrgUnit>) :void{
            if (orgUnit == null)
                return;
            
            if (orgUnit.length == 0)
                return;
            
            this.orgUnits = [];
            this.orgUnits = orgUnit;
        }
}