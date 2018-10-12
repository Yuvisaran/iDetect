'use strict';

import { BasicEntity } from './BasicEntity';
import { DoiWordCount } from './../doi/DoiWordCount';
import { DoiFileCategory } from './../doi/DoiFileCategory';


export class DoiFileEntity extends BasicEntity {
    
    public title : string;
    public fileNumber : string;
    public link : string;
    public description : string;
    public status : string;
    public fileType : string;
    public documentName : string;
    public documentDate : Date;
    public fileValue : number;
    public issueDate : Date;
    public closeDate : Date;
    public collectedDate : Date;
    public url : string;
        
    public amountOfPages : number;
    public amountOfWords : number;        
    public fileSize : number;
    
    public filePath : string;
    public orginalFilePath : string;
    
    public author : string;
    public language : string;
    
    public attachements : string[];
    
    public originId : string;
    public orgUnitId : number;
    public domain : string;
    
    public version : number;
    
    public wordCount : DoiWordCount[];
    public fileCategory : DoiFileCategory[];
    
    public documentClassification : string;
    public md5Fingerprint : string;

    public getFormattedFullName() : string {
        if (this.documentName != null) {
            return this.documentName;
        } else {
            if (this.filePath != null) {
                let strRet : string = this.getNormalizedFilePath();
                if (strRet != null) {
                    return strRet;
                }
            }                   
            return "";
        }
    }
    
    public get label() : string {
        if (!(this.documentName == null || this.documentName.length == 0)) {
            return this.documentName;
        } else if (!(this.title == null || this.title.length == 0)) {
            return this.title;
        } else if (!(this.originId == null || this.originId.length == 0)) {
            return this.originId;
        } else {
            return this.uid;
        }
    }
    
    public getPopupDisplay() : string {
        return this.getFormattedFullName();
    }
    
    public getNormalizedFilePath() : string {
        if (this.filePath != null) {
            let strFile : String[] = this.filePath.split("_");
            let tmpFileName : string = (strFile[2] as string);
            
            if (tmpFileName != null) {
                for (let j : number = 3; j < strFile.length; j++) {
                    tmpFileName += "_" + strFile[j];
                }
                
                return tmpFileName.slice(0,(tmpFileName.length) - 3);
            }
        }
        return "";
    }    
}