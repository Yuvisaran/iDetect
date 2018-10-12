'use strict';

import { BasicLookup} from './../lookup/BasicLookup';

export class RelationShipType extends BasicLookup {
    
    public descriptionTo : string;
    public descriptionFrom : string;
    public codeDescriptionUI : string;
    public nameIcons : string;
    public codeUI : number;        
    public _descriptionFull : string;
    public relationCategory : string;
    public bondType : string;
    
    constructor() {
        super();
    }
    
    public getDescriptionFull() : string {
        if (this._descriptionFull) {
            return this._descriptionFull;
       } else if (this.descriptionTo) {
            return this.descriptionTo;
        } else if (this.descriptionFrom) {
            return this.descriptionFrom;
        } else {
            return "";
        }
    }
    
    //is that necessary ?rel = new RelationShipType(); rel._descriptionFull = indesc; should be working
    public setDescriptionFull(indesc : string) {
        this._descriptionFull = indesc;   
    }
    
    
    //TODO check if used, if not delete it
    public getDescription() : string {
        return this._descriptionFull;   
    }
}