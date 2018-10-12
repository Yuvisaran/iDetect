'use strict';

export class BasicLookup {
        public uid : string;
        public deleteStatus : boolean;
        public deletedOn : Date;
        public createdBy : string;
        public createdOn : Date;
        public updatedBy : string;
        public updatedOn : Date;
        public startDate : Date;
        public endDate : Date;
        public sourceOfData : string;
        public originalUid : string;
        public orgUnitId : number;
        public version : number;
        public listId : string;
        public uidIcon : string;

    public constructor()  {
    }
   
    
    //TODO cause issue during compilation ?
/*    public get originId() : string {
        return this.originalUid;
    }
    
    public set originId(originId : string) {
        this.originalUid = originId;
    }*/
}