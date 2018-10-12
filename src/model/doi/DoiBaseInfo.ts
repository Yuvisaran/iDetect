'use strict';

export class DoiBaseInfo {
    
    // Data Info
    public createdBy : string;
    public createdOn : Date;
    public updatedOn : Date;
    public updatedBy : string;
    
    public userTxt1 : string;
    public userTxt2 : string;
    public userDate1 : Date;
    public userNumber1 : number;
    
    public sourceOfData : string;
    
    public ownedBy : string;
    
    public constructor(indoibaseinfo : DoiBaseInfo = null)
    {
        if (indoibaseinfo != null) {
            this.createdBy = indoibaseinfo.createdBy;
            this.createdOn = indoibaseinfo.createdOn;
            this.updatedBy = indoibaseinfo.updatedBy;
            this.updatedOn = indoibaseinfo.updatedOn;
            this.sourceOfData = indoibaseinfo.sourceOfData;
            this.ownedBy = indoibaseinfo.ownedBy;
            this.userTxt1 = indoibaseinfo.userTxt1;
            this.userTxt2 = indoibaseinfo.userTxt2;
            this.userDate1 = indoibaseinfo.userDate1;
            this.userNumber1 = indoibaseinfo.userNumber1;
        }
    }
    
    public getFormattedFullName() : string {
        return null;
    }
}