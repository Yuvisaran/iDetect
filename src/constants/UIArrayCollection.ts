'use strict';

export class UIArrayCollection {
   
    public static mainTabs : {label : string, data : number}[] = 
        [
            {"label" : "tab.title.0", "data" : 0},
            {"label" : "tab.title.1", "data" : 1},
            {"label" : "tab.title.2", "data" : 2},
            {"label" : "tab.title.3", "data" : 3},
            {"label" : "tab.title.4", "data" : 4},
            {"label" : "tab.title.5", "data" : 5},
            {"label" : "tab.title.6", "data" : 6},
            {"label" : "tab.title.7", "data" : 7},
            {"label" : "tab.title.9", "data" : 9}
        ]
    ;
    
    public static typeOfEntityList : {label : string, data : string}[] = 
        [
        {"label" : "typeOfEntity.naturalPerson", "data" : "Natural Person"},
        {"label" : "typeOfEntity.legalPerson", "data" : "Legal Person"},
        {"label" : "typeOfEntity.unknown", "data" : ""}         
        ]
    ;
    
    public static titleOfNaturalPersonList : {label : string, data : string}[] = 
        [
        {"label" : "titleOfEntityClient.unknown", "data" : ""},
        {"label" : "titleOfEntityClient.mr", "data" : "Mr"},
        {"label" : "titleOfEntityClient.mrs", "data" : "Mrs"},
        {"label" : "titleOfEntityClient.ms", "data" : "Ms"},
        {"label" : "titleOfEntityClient.dr", "data" : "Dr"},
        {"label" : "titleOfEntityClient.prof", "data" : "Prof"}         
        ]
    ;
    
    public static familyStatusNaturalPersonList : {label : string}[] =
        [
        {"label" : "familyStatus.unknow"},
        {"label" : "familyStatus.single"},
        {"label" : "familyStatus.married"},
        {"label" : "familyStatus.separated"},
        {"label" : "familyStatus.widow"},
        {"label" : "familyStatus.divorced"}         
        ] 
    ;
            
    public static sexPersonList : {label : string, data : string}[] = 
        [
            {"label" : "sex.unknown", "data" : ""},
            {"label" : "sex.men", "data" : "m"},
            {"label" : "sex.women", "data" : "f"}         
        ] 
    ;  
    
    public static transactionDirList : {label : string, data : string}[] =  
        [
            {"label" : "transaction.unknow", "data" : ""},
            {"label" : "transaction.debit", "data" : "d"},
            {"label" : "transaction.credit", "data" : "c"}         
        ] 
    ;
    
    public static amlRiskList : {label : string, data : string}[] = 
        [
            {"label" : "luAMLCTFCategory_1", "data" : "1"},
            {"label" : "luAMLCTFCategory_2", "data" : "2"},
            {"label" : "luAMLCTFCategory_3", "data" : "3"},
            {"label" : "luAMLCTFCategory_4", "data" : "4"}
        ] 
    ;
    
    public static matchingAlgorithm : {label : string, data : string, percent : boolean}[] =
        [
            {"label" : "prefUserPrefs.none", "data" : "0", "percent" : false},
            {"label" : "prefUserPrefs.exactMatch", "data" : "1", "percent" : false},
            {"label" : "prefUserPrefs.shuffleMatch", "data" : "19", "percent" : false},
            {"label" : "prefUserPrefs.fuzzyDoubleMetaphone", "data" : "2", "percent" : true},
            {"label" : "prefUserPrefs.easymatch", "data" : "10", "percent" : false},                
            {"label" : "prefUserPrefs.jaroWinkler", "data" : "6", "percent" : true},
            {"label" : "prefUserPrefs.startWidth", "data" : "7", "percent" : false},
            {"label" : "prefUserPrefs.endWidth", "data" : "8", "percent" : false},
            {"label" : "prefUserPrefs.contains", "data" : "9", "percent" : false},
            {"label" : "prefUserPrefs.diacritics", "data" : "23", "percent" : false},
            {"label" : "prefUserPrefs.shufflediacritics", "data" : "24", "percent" : false}
        ]
    ;
    
    public static limitedMatchingAlgorithm : {label : string, data : string, percent : boolean}[] = 
        [
            {"label" : "prefUserPrefs.none", "data" : "0", "percent" : false},
            {"label" : "prefUserPrefs.exactMatch", "data" : "1", "percent" : false},
            {"label" : "prefUserPrefs.shuffleMatch", "data" : "19", "percent" : false},
            {"label" : "prefUserPrefs.easymatch", "data" : "10", "percent" : false},
            {"label" : "prefUserPrefs.fuzzy", "data" : "2", "percent" : true},              
            {"label" : "prefUserPrefs.startWidth", "data" : "7", "percent" : false},
            {"label" : "prefUserPrefs.endWidth", "data" : "8", "percent" : false},
            {"label" : "prefUserPrefs.contains", "data" : "9", "percent" : false},
            {"label" : "prefUserPrefs.diacritics", "data" : "23", "percent" : false},
            {"label" : "prefUserPrefs.shufflediacritics", "data" : "24", "percent" : false},
            {"label" : "prefUserPrefs.exactmatchwithnull", "data" : "27", "percent" : false}
        ]
    ;
    
    public static documentMatchingAlgorithm : {label : string, data : string, percent : boolean}[] = 
        [
            {"label" : "prefUserPrefs.none", "data" : "0", "percent" : false},
            {"label" : "prefUserPrefs.easymatchDocument", "data" : "1", "percent" : false},
            {"label" : "prefUserPrefs.jaroWinklerdoc", "data" : "10", "percent" : false},
            {"label" : "prefUserPrefs.proximity", "data" : "13", "percent" : true},
            {"label" : "prefUserPrefs.synonymdoc", "data" : "15", "percent" : false},
            {"label" : "prefUserPrefs.fuzzyDocument", "data" : "2", "percent" : true},
            {"label" : "prefUserPrefs.startWidthDocument", "data" : "7", "percent" : false},
            {"label" : "prefUserPrefs.endWidthDocument", "data" : "8", "percent" : false},
            {"label" : "prefUserPrefs.containsDocument", "data" : "9", "percent" : false}
        ]
    ;
    
    public static geoLocationMatchingAlgorithm : {label : string, data : string, percent : boolean}[] =
        [
            {"label" : "prefUserPrefs.none", "data" : "0", "percent" : false},
            {"label" : "prefUserPrefs.around", "data" : "16", "percent" : true}
        ]
    ; 
    
    public static availableActionsList : {label : string, data : string, type : number}[] = 
        [
            {"label" : "batch.actions.title.actions", "data" : "100", "type" : 100},
            {"label" : "batch.actions.addPrefix", "data" : "0", "type" : 0},        // Type 0 == PrefixSuffix
            {"label" : "batch.actions.addSuffix", "data" : "1", "type" : 0},
            {"label" : "batch.actions.removePrefix", "data" : "2", "type" : 0},
            {"label" : "batch.actions.removeSuffix", "data" : "3", "type" : 0},
            {"label" : "batch.actions.concat", "data" : "23", "type" : 0},
            {"label" : "batch.actions.findAndReplace", "data" : "4", "type" : 1},   // Type 1 == String
            {"label" : "batch.actions.extract", "data" : "5", "type" : 1},
            {"label" : "batch.actions.trim", "data" : "6", "type" : 1},
            {"label" : "batch.actions.extract.char", "data" : "7", "type" : 1},
            {"label" : "batch.actions.capitalization", "data" : "8", "type" : 1},
            {"label" : "batch.actions.title.types", "data" : "101", "type" : 100},
            {"label" : "batch.actions.getDate", "data" : "9", "type" : 2},          // Type 2 == Date
            {"label" : "batch.actions.getNumeric", "data" : "12", "type" : 3},      // Type 3 == Number
            {"label" : "batch.actions.newColumn", "data" : "22", "type" : 10},      // Type 10 == Column
            {"label" : "batch.actions.title.special", "data" : "102", "type" : 100},
            //{"label" : "batch.actions.getCountry", "data" : "13", type:4},        
            {"label" : "batch.actions.getOrgUnit", "data" : "14", "type" : 5},      // Type 5 == OrgUnit
            {"label" : "batch.actions.getUidResolve", "data" : "15", "type" : 6},   // Type 6 == UidResolve
            {"label" : "batch.actions.pattern", "data" : "21", "type" : 1},         
            {"label" : "batch.actions.sex", "data" : "16", "type" : 7},             // Type 7 == Sex        
            {"label" : "batch.actions.legalEntity", "data" : "17", "type" : 8},     // Type 8 == Legal Entity
            {"label" : "batch.actions.lookup", "data" : "18", "type" : 4},          // Type 4 == Lookup 
            {"label" : "batch.actions.relation", "data" : "19", "type" : 9} ,           // Type 9 == Relation   
            {"label" : "batch.actions.multipleValues", "data" : "24", "type" : 1}
        ]   
    ;
    
    public static specialCharactersList : {label : string, data : string, source : string}[] = 
        [
            {"label" : "column.character.space", "data" : "32", "source" : "character"},
            {"label" : "column.character.period", "data" : "46", "source" : "character"},
            {"label" : "column.character.underscore", "data" : "95", "source" : "character"},
            {"label" : "column.character.comma", "data" : "44", "source" : "character"},
            {"label" : "column.character.hyphen", "data" : "45", "source" : "character"},
            {"label" : "column.character.star", "data" : "42", "source" : "character"}
        ]
    ;
    
    public static dateFormatList : {format : string, description : string}[] =
        [
            {"format" : "DD/MM/YYYY", "description" : "column.date.shortDate"},
            {"format" : "DD/MMM/YYYY", "description" : "column.date.shortMonthDate"},
            {"format" : "DD/MMMM/YYYY", "description" : "column.date.fullDate"},
            {"format" : "EEEE DD MMMM YYYY", "description" : "column.date.fullDateAndDay"},
            {"format" : "DD/MMMM/YYYY H:NN:SS", "description" : "column.date.dateAndTime"}
        ]
    ;  
    
    public static yearMatching : {label : string, data : string}[] = 
        [
            {"label" : "preferredDatePrecision.year", "data" : "0"},
            {"label" : "preferredDatePrecision.month", "data" : "1"},
            {"label" : "preferredDatePrecision.day", "data" : "2"},
            {"label" : "preferredDatePrecision.lustrum", "data" : "4"},
            {"label" : "preferredDatePrecision.decade", "data" : "3"},
            {"label" : "prefUserPrefs.fifoMatch", "data" : "20"},
        ]               
    ;
    
    public static hourMatching : {label : string, data : string}[] = 
        [
            {"label" : "preferredDatePrecision.year", "data" : "0"},
            {"label" : "preferredDatePrecision.month", "data" : "1"},
            {"label" : "preferredDatePrecision.day", "data" : "2"},
            {"label" : "preferredDatePrecision.hour", "data" : "7"},
            {"label" : "preferredDatePrecision.lustrum", "data" : "4"},
            {"label" : "preferredDatePrecision.decade", "data" : "3"}
        ]               
    ;
    
    public static searchRelatedEntityTypeOfSearch : {label : string, data : string}[] = 
        [   
            {"label" : "searchRelatedEntities.parameter.entities", "data" : "0"},   
            {"label" : "searchRelatedEntities.parameter.events", "data" : "4"},
            {"label" : "searchRelatedEntities.parameter.relationships", "data" : "1"},
            {"label" : "searchRelatedEntities.parameter.relationshipsCategory", "data" : "5"},
            {"label" : "searchRelatedEntities.parameter.transaction", "data" : "2"},
            {"label" : "searchRelatedEntities.parameter.document", "data" : "3"}
        ]               
    ;      
    
    public static relationFieldList : {id : string, label : string}[] = 
        [
            {"id" : "type", "label" : "relationfield.type"},
            {"id" : "createdOn", "label" : "relationfield.createdOn"},
            {"id" : "dateBegin", "label" : "relationfield.dateBegin"},
            {"id" : "dateEnd", "label" : "relationfield.dateEnd"}               
        ]
    ;
    
    public static documentTypeParameterList : {id : string, label : string, data : string, description : string}[] = 
        [
            {"id" : "0", "label" : "documentTypeParameter.doc", "data" : "doc", "description" : "Doc"},
            {"id" : "1", "label" : "documentTypeParameter.pdf", "data" : "pdf", "description" : "Pdf"}
        ]
    ;      
    
    public static filterOperations : {label : string, data : string}[] = 
        [
            {"label" : "<", "data" : "0"},
            {"label" : "<=", "data" : "1"},
            {"label" : ">", "data" : "2"},
            {"label" : ">=", "data" : "3"},
            {"label" : "=", "data" : "4"},
            {"label" : "<>", "data" : "5"}      
        ]
    ;
    
    public static filterOperationsNumber : {label : string, data : string}[] = 
        [
            {"label" : "<", "data" : "0"},
            {"label" : "<=", "data" : "1"},
            {"label" : ">", "data" : "2"},
            {"label" : ">=", "data" : "3"},
            {"label" : "=", "data" : "4"},
            {"label" : "<>", "data" : "5"}, 
            {"label" : "Range", "data" : "6"}
        ]
    ;
    
    public static blackWhiteCollection : {label : string, data : string}[] = 
        [
            {"label" : "newlist.granularity.structured","data" : "1"},
            {"label" : "newlist.granularity.unstructured","data" : "2"},
            {"label" : "newlist.granularity.tight","data" : "3"},
            {"label" : "newlist.granularity.loose","data" : "4"}
        ]
    ;
    
    public static linkDirectionCollection : {label : string, data : string}[] = 
        [
            {"label" : "A->B","data" : "1"},
            {"label" : "B->A","data" : "2"},
            {"label" : "Bidirectional","data" : "3"}
        ]
    ;
    
    public static timelinePeriodsCollection : {label : string, data : string}[] = 
        [
            {"label" : "common.auto", "data" : "0"},
            {"label" : "common.daily", "data" : "1"},
            {"label" : "common.weekly", "data" : "2"},
            {"label" : "common.monthly", "data" : "3"},
            {"label" : "common.quarterly", "data" : "4"},
            {"label" : "common.yearly", "data" : "5"}           
        ]
    ;
    
    //--------------------------------------------------
    //
    // List Management
    //
    //--------------------------------------------------
    public static exportFormatsArray : {label : string, data : string}[] =
        [   
            {"label" : "export.format0", "data" : "0"},
            {"label" : "export.format1", "data" : "1"},
            {"label" : "export.format2", "data" : "2"},
            {"label" : "export.format3", "data" : "3"},
            {"label" : "export.format4", "data" : "4"},
            {"label" : "export.format5", "data" : "5"}
        ]               
    ;
    
    public static compressFormatsArray : {label : string, data : string}[] = 
        [   
            {"label" : "export.compress0", "data" : "0"},
            {"label" : "export.compress1", "data" : "1"},
            {"label" : "export.compress2", "data" : "2"},
            {"label" : "export.compress3", "data" : "3"}
        ]               
    ;
    
    public static fileEncodingArray : {label : string, data : string, description : string}[] = 
        [   
            {"label" : "export.encoding0", "data" : "0", "description" : "export.encoding.description0"},
            {"label" : "export.encoding1", "data" : "1", "description" : "export.encoding.description1"},
            {"label" : "export.encoding2", "data" : "2", "description" : "export.encoding.description2"},
            {"label" : "export.encoding3", "data" : "3", "description" : "export.encoding.description3"},
            {"label" : "export.encoding4", "data" : "4", "description" : "export.encoding.description4"},
            {"label" : "export.encoding5", "data" : "5", "description" : "export.encoding.description5"},
            {"label" : "export.encoding6", "data" : "6", "description" : "export.encoding.description6"},
            {"label" : "export.encoding7", "data" : "7", "description" : "export.encoding.description7"},
            {"label" : "export.encoding8", "data" : "8", "description" : "export.encoding.description8"},
            {"label" : "export.encoding9", "data" : "9", "description" : "export.encoding.description9"},
            {"label" : "export.encoding10", "data" : "10", "description" : "export.encoding.description10"},
            {"label" : "export.encoding11", "data" : "11", "description" : "export.encoding.description11"},
            {"label" : "export.encoding12", "data" : "12", "description" : "export.encoding.description12"},
            {"label" : "export.encoding13", "data" : "13", "description" : "export.encoding.description13"},
            {"label" : "export.encoding14", "data" : "14", "description" : "export.encoding.description14"},
            {"label" : "export.encoding15", "data" : "15", "description" : "export.encoding.description15"},
            {"label" : "export.encoding16", "data" : "16", "description" : "export.encoding.description16"},
            {"label" : "export.encoding17", "data" : "17", "description" : "export.encoding.description17"},
            {"label" : "export.encoding18", "data" : "18", "description" : "export.encoding.description18"},
            {"label" : "export.encoding19", "data" : "19", "description" : "export.encoding.description19"}
        ]               
    ;
    
    //--------------------------------------------------
    //
    // Scenario Management
    //
    //--------------------------------------------------
    public static rulePeriodicityArray : {label : string, data : string}[] = 
        [
            {"label" : "rule.periodicity0", "data" : "0"},
            {"label" : "rule.periodicity1", "data" : "1"},
            {"label" : "rule.periodicity2", "data" : "2"},
            {"label" : "rule.periodicity3", "data" : "3"},
            {"label" : "rule.periodicity4", "data" : "4"},
            {"label" : "rule.periodicity5", "data" : "5"}
        ]
    ;
    
    public static profilesPeriodicityArray : {label : string, data : string}[] = 
        [
            {"label" : "folder.type.profilesType0", "data" : "0"},
            {"label" : "folder.type.profilesType1", "data" : "4"},
            {"label" : "folder.type.profilesType2", "data" : "5"},
            {"label" : "folder.type.profilesType3", "data" : "6"},
            {"label" : "folder.type.profilesType8", "data" : "8"},
            {"label" : "folder.type.profilesType9", "data" : "9"},
            {"label" : "folder.type.profilesType10", "data" : "10"}
        ]
    ;
    
    public static ruleStatusArray : {label : string, data : string}[] = 
        [   
            {"label" : "rule.status0", "data" : "0"},           
            {"label" : "rule.status1", "data" : "1"},
            {"label" : "rule.status2", "data" : "2"}
        ]               
    ;
            
    public static listOfScenarioType : {label : string, data : string}[] = 
        [   
            {"label" : "scenario.online", "data" : "ONLINE"},
            {"label" : "scenario.batch", "data" : "BATCH"},
            {"label" : "scenario.realtime", "data" : "REALTIME"},
            {"label" : "scenario.workflow", "data" : "WORKFLOW"}            
        ]               
    ;  
    
    public static ruleTypeArray : {label : string, data : string}[] =
        [   
            {"label" : "rule.ruleType", "data" : "0"},          
            {"label" : "rule.profileType", "data" : "1"}
        ]               
    ;
    
    public static profileContentTypeArray : {label : string, data : string}[] = 
        [   
            {"label" : "profile.numericType", "data" : "0"},            
            {"label" : "profile.stringType", "data" : "1"},
            {"label" : "profile.dateType", "data" : "2"}
        ]               
    ;
    
    //--------------------------------------------------
    //
    // Alert and Case Management
    //
    //--------------------------------------------------
    public static priorityArray : {label : string, data : string, txt : string}[] = 
        [   
            {"label" : "alert.priority.notDefined", "data" : "-1", "txt" : "Not Defined"},
            {"label" : "alert.priority.low", "data" : "0", "txt" : "Low"},          
            {"label" : "alert.priority.medium", "data" : "1", "txt" : "Medium"},
            {"label" : "alert.priority.high", "data" : "2", "txt" : "High"}
        ]               
    ;
    
    public static priorityArrayFilter : {label : string, data : string}[] = 
        [   
            {"label" : "alert.priority.reset", "data" : ""},
            {"label" : "alert.priority.notDefined", "data" : "-1"},
            {"label" : "alert.priority.low", "data" : "0"},         
            {"label" : "alert.priority.medium", "data" : "1"},
            {"label" : "alert.priority.high", "data" : "2"}
        ]
    ;
    
    public static casePeriodicityArray : {label : string, data : string}[] = 
        [   
            {"label" : "case.periodicity.thisMonth", "data" : "0"},         
            {"label" : "case.periodicity.earlierSemester", "data" : "1"},
            {"label" : "case.periodicity.lastSemester", "data" : "2"},
            {"label" : "case.periodicity.older", "data" : "3"}
        ]
    ;
            
    //--------------------------------------------------
    //
    // User Management
    //
    //--------------------------------------------------
    
    public static adminUserDataGridColumns : {label : string, data : string}[] = 
        [   
            {"label" : "admin.user.userName", "data" : "userName"},         
            {"label" : "admin.user.fullName", "data" : "fullName"},
            {"label" : "admin.user.phone", "data" : "phone"},
            {"label" : "admin.user.email", "data" : "email"},
            {"label" : "admin.user.active", "data" : "active"}
        ]
    ;  
    
    public static adminImportType : {id : string, name : string}[] = 
        [
            {"id" : "1", "name" : "Insert"},
            {"id" : "2", "name" : "Merge"},
            {"id" : "3", "name" : "Delete"}
        ]
    ;
    
    //--------------------------------------------------
    //
    // Entities Chooser
    //
    //--------------------------------------------------    
    
    //Types: E=Entity ; R=Relation ; T=Transaction ; F=Folder
    public static ENTITY_TYPE : string = "E";
    public static RELATIONSHIP_TYPE : string = "R";
    public static TRANSACTION_TYPE : string = "T";
    public static FOLDER_TYPE : string = "F";             
    
    //--------------------------------------------------
    //
    // Palette Popup
    //
    //--------------------------------------------------
    public static lineWeightLinks : {label : string, width : number, data : string}[] = 
        [   
            {"label" : "1", "width" : 1, "data" : "1"},         
            {"label" : "2", "width" : 2, "data" : "2"},
            {"label" : "3", "width" : 3, "data" : "3"},
            {"label" : "4", "width" : 4, "data" : "4"},
            {"label" : "5", "width" : 5, "data" : "5"}
        ]
    ;
    
    public static lineDashedLinks : {label : string, dashed : number, data : string}[] = 
        [   
            {"label" : "0", "dashed" : -1, "data" : "-1"},
            {"label" : "5", "dashed" : 5, "data" : "5"},            
            {"label" : "10", "dashed" : 10, "data" : "10"},
            {"label" : "15", "dashed" : 15, "data" : "15"},
            {"label" : "20", "dashed" : 20, "data" : "20"},
            {"label" : "25", "dashed" : 25, "data" : "25"}
        ]
    ;
    
    public static lineArrowLinks : {label : string, arrow : number, data : string, arrowCode : string}[] =
        [                   
            {"label" : "0", "arrow" : 0, "data" : "0", "arrowCode" : "0"},
            {"label" : "1", "arrow" : 1, "data" : "1", "arrowCode" : "1"},          
            {"label" : "2", "arrow" : 2, "data" : "2", "arrowCode" : "2"},
            {"label" : "3", "arrow" : 3, "data" : "3", "arrowCode" : "3"}
        ]
    ;
    
    public static listOfColorLinks : {label : string, color : string, id : string}[] =
        [   
            {"label" : "menu.circleNone", "color" : "0x000000", "id" : "-1"},
            {"label" : "menu.circleAqua", "color" : "0x33CCCC", "id" : "0"},    
            {"label" : "menu.circleBlue", "color" : "0x0000FF", "id" : "2"},
            {"label" : "menu.circleCyan", "color" : "0x0066FF", "id" : "15"},
            {"label" : "menu.circleFushia", "color" : "0xFF00FF", "id" : "3"},
            {"label" : "menu.circleGold", "color" : "0xFF9900", "id" : "16"},
            {"label" : "menu.circleGreen", "color" : "0x339900", "id" : "4"},
            {"label" : "menu.circleGrey", "color" : "0x999999", "id" : "5"},
            {"label" : "menu.circleLime", "color" : "0x99CC00", "id" : "6"},
            {"label" : "menu.circleMagenta", "color" : "0xCC0066", "id" : "17"},
            {"label" : "menu.circleMaroon", "color" : "0x990000", "id" : "7"},
            {"label" : "menu.circleNavy", "color" : "0x000099", "id" : "8"},
            {"label" : "menu.circleOlive", "color" : "0x333300", "id" : "10"},
            {"label" : "menu.circleOrange", "color" : "0xFF6600", "id" : "18"},
            {"label" : "menu.circlePurple", "color" : "0x990099", "id" : "11"},
            {"label" : "menu.circleRed", "color" : "0xFF0000", "id" : "9"},
            {"label" : "menu.circleSilver", "color" : "0xCCCCCC", "id" : "12"},
            {"label" : "menu.circleTeal", "color" : "0x009999", "id" : "13"},
            {"label" : "menu.circleYellow", "color" : "0xFFFF00", "id" : "14"},
            {"label" : "menu.circleBlack", "color" : "0x000000", "id" : "1"}
        ]
    ;
     
    public static  fontHeight : {label : string, height : number}[] = 
        [   
            {"label" : "8", "height" : 8},          
            {"label" : "10", "height" : 10},
            {"label" : "12", "height" : 12},
            {"label" : "14", "height" : 14},
            {"label" : "16", "height" : 16}
        ]
    ;
    
    public static pathFinderDepth : {label : string, value : number}[] = 
        [   
            {"label" : "1", "value" : 1},           
            {"label" : "2", "value" : 2},
            {"label" : "3", "value" : 3},
            {"label" : "4", "value" : 4},
            {"label" : "5", "value" : 5}
        ]
    ;
    
    //--------------------------------------------------
    //
    // Statistics
    //
    //--------------------------------------------------
    
    
    public static statisticsType : {label : string, value : number, data : string}[] = 
        [   
            {"label" : "chart.type.0", "value" : 0, "data" : "CategorizedVertical"},
            {"label" : "chart.type.1", "value" : 1, "data" : "CategorizedHorizontal"},
            {"label" : "chart.type.2", "value" : 2, "data" : "Scatter"},
            {"label" : "chart.type.3", "value" : 3, "data" : "Pie"},
            {"label" : "chart.type.4", "value" : 4, "data" : "Polar"},
            {"label" : "chart.type.5", "value" : 5, "data" : "Radar"},
            {"label" : "chart.type.6", "value" : 6, "data" : "Doughnut"},
            {"label" : "chart.type.7", "value" : 7, "data" : "Map"},
            {"label" : "chart.type.8", "value" : 8, "data" : "HeatMap"},
            {"label" : "chart.type.9", "value" : 9, "data" : "TreeMap"},
            {"label" : "chart.type.10", "value" : 10, "data" : "Funnel"}
        ]               
    ;
    
    public static statisticsSubType : {label : string, value : number,  data : string, type : number}[] = 
        [   
            {"label" : "char.subtype.0", "value" : 0, "data" : "Bar", "type" : 0},
            {"label" : "char.subtype.1", "value" : 1, "data" : "RangeBar", "type" : 1},
            {"label" : "char.subtype.2", "value" : 2, "data" : "Line", "type" : 0},
            {"label" : "char.subtype.3", "value" : 3, "data" : "RangeArea", "type" : 1},
            {"label" : "char.subtype.4", "value" : 4, "data" : "RangeSplineArea", "type" : 1},
            {"label" : "char.subtype.5", "value" : 5, "data" : "Spline", "type" : 0},
            {"label" : "char.subtype.6", "value" : 6, "data" : "Marker", "type" : 0},
            {"label" : "char.subtype.7", "value" : 7, "data" : "Area", "type" : 0},
            {"label" : "char.subtype.8", "value" : 8, "data" : "SplineArea", "type" : 0},
            {"label" : "char.subtype.9", "value" : 9, "data" : "StepLineForward", "type" : 0},
            {"label" : "char.subtype.10", "value" : 10, "data" : "StepLineBackward", "type" : 0},
            {"label" : "char.subtype.11", "value" : 11, "data" : "StepLineForwardArea", "type" : 0},
            {"label" : "char.subtype.12", "value" : 12, "data" : "StepLineBackwardArea", "type" : 0},
            {"label" : "char.subtype.13", "value" : 13, "data" : "Bubble", "type" : 1},
            {"label" : "char.subtype.14", "value" : 14, "data" : "Candlestick", "type" : 1},
            {"label" : "char.subtype.15", "value" : 15, "data" : "OHLC", "type" : 1}
        ]               
    ;
    
    public static statisticsShapeType : {label : string, value : string, data : string}[] = 
        [
            {"label" : "char.shapetype.0", "value" : "0", "data" : "Box"},
            {"label" : "char.shapetype.1", "value" : "1", "data" : "Cylinder"},
            {"label" : "char.shapetype.2", "value" : "2", "data" : "Pyramid"},
            {"label" : "char.shapetype.3", "value" : "3", "data" : "Cone"}
        ]
    ;
    
    public static legendMode : {label : string, value : string, data : string}[] = 
        [
            {"label" : "legend.mode.0", "value" : "0", "data" : "Normal"},
            {"label" : "legend.mode.1", "value" : "1", "data" : "Table"}
        ]
    ;
    
    public static statisticsElementsLayout : {label : string, value : string, data : string}[] =
        [
            {"label" : "legend.elements.layout.0", "value" : "0", "data" : "Vertical"},
            {"label" : "legend.elements.layout.1", "value" : "1", "data" : "Horizontal"}
        ]
    ;
    
    public static statisticsAlign : {label : string, value : string, data : string}[] = 
        [
            {"label" : "legend.elements.align.0", "value" : "0", "data" : "Left"},
            {"label" : "legend.elements.align.1", "value" : "1", "data" : "Right"},
            {"label" : "legend.elements.align.2", "value" : "2", "data" : "Center"}
        ]
    ;
    
    public static statisticsItemSource : {label : string, value : string, data : string}[] = 
        [
            {"label" : "legend.item.source.0", "value" : "0", "data" : "Points"},
            {"label" : "legend.item.source.1", "value" : "1", "data" : "Series"},
            {"label" : "legend.item.source.2", "value" : "2", "data" : "Thresholds"}
        ]
    ;
    
    public static statisticsLegendPosition : {label : string, value : string, data : string}[] = 
        [
            {"label" : "legend.position.0", "value" : "0", "data" : "Left"},
            {"label" : "legend.position.1", "value" : "1", "data" : "Right"},
            {"label" : "legend.position.2", "value" : "2", "data" : "Top"},
            {"label" : "legend.position.3", "value" : "3", "data" : "Bottom"},
            {"label" : "legend.position.4", "value" : "4", "data" : "Float"}
        ]
    ;
    
    public static statisticsLegendAnchor : {label : string, value : string, data : string}[] = 
        [
            {"label" : "legend.anchor.0", "value" : "0", "data" : "LeftTop"},
            {"label" : "legend.anchor.1", "value" : "1", "data" : "CenterTop"},
            {"label" : "legend.anchor.2", "value" : "2", "data" : "RightTop"},
            {"label" : "legend.anchor.3", "value" : "3", "data" : "RightBottom"},
            {"label" : "legend.anchor.4", "value" : "4", "data" : "CenterBottom"},
            {"label" : "legend.anchor.5", "value" : "5", "data" : "LeftBottom"},
            {"label" : "legend.anchor.6", "value" : "6", "data" : "Center"}
        ]
    ;
    
    public static statisticsLegendAlign : {label : string, value : string, data : string}[] = 
        [
            {"label" : "legend.align.0", "value" : "0", "data" : "Near"},
            {"label" : "legend.align.1", "value" : "1", "data" : "Far"},
            {"label" : "legend.align.2", "value" : "2", "data" : "Center"},
            {"label" : "legend.align.3", "value" : "3", "data" : "Spread"}
        ]
    ;
    
    public static statisticsLabelsDisplay : {label : string, value : string, data : string}[] = 
        [
            {"label" : "char.labels.display.0", "value" : "0", "data" : "Normal"},
            {"label" : "char.labels.display.1", "value" : "1", "data" : "Stager"}
        ]
    ;
    
    public static statisticsScaleMode : {label : string, value : string, data : string}[] = 
        [
            {"label" : "char.scale.mode.0", "value" : "0", "data" : "Normal"},
            {"label" : "char.scale.mode.1", "value" : "1", "data" : "Stacked"},
            {"label" : "char.scale.mode.2", "value" : "2", "data" : "PercentStacked"},
            {"label" : "char.scale.mode.3", "value" : "3", "data" : "Overlay"},
            {"label" : "char.scale.mode.4", "value" : "4", "data" : "SortedOverlay"}
        ]
    ;
    
    public static statisticsLabelPosition : {label : string, value : string, data : string}[] =
        [
            {"label" : "char.label.position.0", "value" : "0", "data" : "XAxis"},
            {"label" : "char.label.position.1", "value" : "1", "data" : "Center"},
            {"label" : "char.label.position.2", "value" : "2", "data" : "CenterLeft"},
            {"label" : "char.label.position.3", "value" : "3", "data" : "LeftTop"},
            {"label" : "char.label.position.4", "value" : "4", "data" : "CenterTop"},
            {"label" : "char.label.position.5", "value" : "5", "data" : "RightTop"},
            {"label" : "char.label.position.6", "value" : "6", "data" : "CenterRight"},
            {"label" : "char.label.position.7", "value" : "7", "data" : "RightBottom"},
            {"label" : "char.label.position.8", "value" : "8", "data" : "CenterBottom"},
            {"label" : "char.label.position.9", "value" : "9", "data" : "LeftBottom"}
        ]
    ;
    
    //--------------------------------------------------
    //
    // Crawler
    //
    //--------------------------------------------------
    
    public static crawlerCategories : string[]  = 
        [
            "TEXT",
            "HTML",
            "IMAGE",
            "VIDEO",
            "ZIP"
        ]
    ;
    
    
}