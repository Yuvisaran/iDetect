'use strict'

import { BasicLookup } from './BasicLookup';

export class ActivityRisk extends BasicLookup {
    
    public typeRisk : string;    
    public value : number;
    public _activityId : string;
    public activityCode : string;
    
    constructor() {
        super();    
    }
    
    public get activityId() : string {
        return this._activityId;    
    }
    
    public set activityId(activity : string) {
        this._activityId = activity;    
        
    }
    
}