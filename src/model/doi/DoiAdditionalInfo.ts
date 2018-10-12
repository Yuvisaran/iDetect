'use strict';

import { DoiBaseInfo } from './DoiBaseInfo';
import { AdditionalInfoCategory} from './../lookup/AdditionalInfoCategory';

export class DoiAdditionalInfo extends DoiBaseInfo {
   
    public uid : string;
    public additionalInfoCat : string; 
    public category : string;
    public categoryObj : AdditionalInfoCategory;
    public information : string;
    public uidTbl : string;
    public dateInfo : Date;
    public listId : string;
    public originalId : string;
    public version : number;
    public infoNumber : number;
    
    //TODO
   // private dateFormatter:DateFormatter = new DateFormatter("DD-MM-YYYY at JJ:NN:SS");
   // private numberFormatter:NumberFormatter; 
    
    constructor() {
        super();
        //numberformatter setter 
    }
    
    public  toString() : string {
        let displayInfo : string = "";

        if (this.additionalInfoCat) {
            displayInfo += this.additionalInfoCat + ":";
        } 

        if (this.categoryObj != null) {
            displayInfo += this.categoryObj.getFormattedFullName() + " "; 
        } 
        
        if (this.information)
            displayInfo += this.information+ " ";

        if (this.infoNumber) 
            //displayInfo += ":" + numberFormatter.format(this.infoNumber) + " ";         //TODO
        
        if (this.dateInfo) {
           // displayInfo += "(" + dateFormatter.format(this.dateInfo) + ")";  //TODO
        }
        
        return displayInfo;
    }
        
    public getFormattedFullName() : string {
        return this.toString();
    }
    
    
}