'use strict';

export class UserPreferences {

    //User preferences
    public language : string;
    public currency : string;
    public pageSize : number;
    public primaryOrgUnitCode : string;
            
    public linkChartAccelaration : number;
    public tagCloudMinWordOccurences : number;
    public tagCloudMinNumberOfDocuments : number;
    public linkchartGraphMergingSingleton : number;
    public folderLinksAsSingle : number;
    public reminderExpirationDays : number;
    public reminderCheckingInterval : number;
    public reminderMaxDisplay : number;
    public areachartMaxElements : number;
    public linechartMaxElements : number;
    public piechartMaxElements : number;
    
    //User preferences GeoSpacial
    public preferredAlgorithm : string;
    
    public seeNoDataMultiSelectPrefs : number;
    public overflowTransactionLimit : number;
    public overflowSingleSelectEntityDisplay : number;
    
    public showClosedAlerts : boolean;
    
    //to remove errors from log might be subject to remove
    public vmultiSelectPreferences : Object; //TODO check type of vmultiSelectPreferences  
    public fuzzy_Match_Percent : string;
    public currencies_id: number;
    
    constructor() {
    }
    
}