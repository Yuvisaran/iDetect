'use strict';

import { MultiSelectAvailableFields } from './MultiSelectAvailableFields';
import { MultiSelectFieldsOrder } from './MultiSelectFieldsOrder';

export class MultiSelectPreferences {
  
    public id : number;
    public userId : string;
    public maxDisplayedDatagrid : number;
    public maxAtomExploded : number;
    public maxAtomReturn : number;
    public availableFields : Array<MultiSelectAvailableFields>;
    public fieldsOrder : Array<MultiSelectFieldsOrder>;
    
    constructor() {
        this.availableFields = new Array<MultiSelectAvailableFields>();
        this.fieldsOrder = new Array<MultiSelectFieldsOrder>();
    }
    
}