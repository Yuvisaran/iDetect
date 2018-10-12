'use strict';

import { OrgUnit } from './../adm/orgunit/OrgUnit';
import { FieldDescription } from './FieldDescription';


export class ListDetails {

    
    public id : string;
    public parentId : string;
    public name : string;
    public description : string;
    public hibernateName : string;
    public type : string;
    public filter : string;
    public deleteStatus : boolean;
    public listType : number;
    public viewable : boolean;
    public importable : boolean;
    public entityUid : string;
    public entityType : string;
    public ownedBy : string;
    public file : boolean;
    public readOnly : boolean;
    
    public amountOfRecords : number;
    public amountOfColumn : number;
    
    public updatedBy : string;
    public updatedOn:Date;
            
    public writable : boolean;
    public sourceOfDataAuthorized : Array<string>;
    
    public orgUnit : OrgUnit;
    
    public listOfFields : Array<FieldDescription>;
    public listOfImportableFields : Array<FieldDescription>;
    
    public triImportable : number;
    public triViewable : number;
    public triType : number;     
    
    public listOfDataSources : Array<String>; //TODO required ???
    public listClassification : string;
    
    public entityTypeDisplayName : string;
    
    public fullPath : string;
    public languageIso3 : string;
    public originalUid : string;
    
    public evaluation : string;  
    
/*    public isSourceOfDataIn(inSourceOfData : string) : boolean{
        if (this.sourceOfDataAuthorized != null)
            return this.sourceOfDataAuthorized.contains(inSourceOfData);
        
        return false;
    }*/
        
/*
        public static StructuredList : Class;
        
        public static UnStructuredList : Class;
        
        public get icon() : Class {
            try {
                if ((type=="0") || (type=="1")) {
                    return StructuredList;
                } else if (type=="2") {
                    return UnStructuredList;
                }
                
            } catch (err:Error) {}
            return StructuredList;
        }
        
        public get fields() : ArrayCollection {
            if (listOfFields!=null)
                return listOfFields;
                        
            return new ArrayCollection();
        }*/
}