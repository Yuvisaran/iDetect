'use strict';

export class UserLanguagePreferences {
    
    public id : number;
    public userId : number;
    
    public languageTo : string;
    public languageFrom : string;
    public exceptions : string[];
    public possibilities : string[];
        
    constructor() {
    }
}