'use strict';

import { User } from './../user/User';
import { BasicEntity } from './BasicEntity';
import { DoiReminderEntity } from './DoiReminderEntity';

export class ReminderStatus extends BasicEntity {
    
    public reminder : DoiReminderEntity;
    public user : User;
    public readStatus : boolean;
    
    constructor() {
        super(); 
    }
}