'use strict';

export class UserDashBoardPreferences {

    public uid : string;
    public userId : number;
    public preferenceCode : string;
    public preferenceValue : string;
    public version : number;
    
    public creationDtg : Date;
    public lastUpdateDtg : Date;
    public creationUser : string;
    public lastUpdateUser : string;      
    
    public deleteStatus : string;
    
    constructor() {
        
    }
}