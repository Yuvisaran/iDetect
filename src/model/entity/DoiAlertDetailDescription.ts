'use strict';


export class DoiAlertDetailDescription {
    public uid : string;
    public uidTbl : string;
    public detailedInformation : string;
    public relatedEntityUid : string;
    public relatedEntitySource : string;
    
    private getFormattedFullName() : string {
       if (this.detailedInformation != null) {
          return this.detailedInformation;
       } else {
            return ""; 
       }
    }
    
    public getPopupDisplay() : string {
        return this.getFormattedFullName(); 
    }
    
}