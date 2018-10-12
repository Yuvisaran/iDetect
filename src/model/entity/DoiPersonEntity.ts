'use strict';

import { BasicEntity } from './BasicEntity';
import { DoiEntityComment } from './../doi/DoiEntityComment';
import { DoiLocation } from './../doi/DoiLocation';
import { DoiPersonPhysChar } from './../doi/DoiPersonPhysChar';
import { DoiPersonPhysCharPrim } from './../doi/DoiPersonPhysCharPrim';
import { DoiSource } from './../doi/DoiSource';
import { DoiRisk } from './../doi/DoiRisk';
import { DoiPhoneEntity } from './DoiPhoneEntity';
import { DoiNickName } from './../doi/DoiNickName';
import { DoiEmailEntity } from './DoiEmailEntity';
import { DoiAdditionalInfo } from './../doi/DoiAdditionalInfo';
import { DoiIdentificationDocEntity } from './DoiIdentificationDocEntity';


import { ActivityCode } from './../lookup/ActivityCode';
import { BusinessCode } from './../lookup/BusinessCode';
import { Country } from './../lookup/Country';
import { IncomeSource } from './../lookup/IncomeSource';
import { LegalForm } from './../lookup/LegalForm';
import { Occupation } from './../lookup/Occupation';
import { PersonCategory } from './../lookup/PersonCategory';
import { WorldCheckKeyword } from './../lookup/WorldCheckKeyword';

import { UIConstant } from './../../constants/UIConstant';


export class DoiPersonEntity extends BasicEntity {
   
    public lastName : string;
    public firstName : string;
    public middleName : string;
    public fullName : string;
    private _dob : Date;
    private _dobHigh : Date;
    private _deceasedDate : Date;
    public legalStatus : string;
    public sex : string;
    
    public motherLastName : string;
    public motherGivenName : string;
    public fatherLastName : string;
    public fatherGivenName : string;
    public grandFatherName : string;

    //ISO3 code of the country for multilanguage issues
    public placeOfBirth : string;                         
    public countryOfBirthCountry : Country;
    public countryOfBirth : string;
    public cityOfBirth : string;

    public businessCode : string;
    public businessCodeObj : BusinessCode;
    
    public vatNumber : string;
    public faceToFace : number;

    public originId : string;
    public orgUnitId : number;
    public orgUnitName : string;
    
    public globalScore : number;
    
    public customerNumber : string;
    public naceCode : string;

    public version : number;

    public dateCreation : Date;
    public dateUpdated : Date;
    
    public giin : string;
    public tin : string;
    public delistedOn : Date;
    public password : string;
    
    public legalForm : string;
    public legalFormObj : LegalForm;
    
    public personCategoryUid : string;
    public honoraryTitle : string;
    public orgUnitDescription : string;
    
    public physCharPrim : DoiPersonPhysCharPrim;
    public personCategory : PersonCategory;
    
    public arrayOfRisks : Array<DoiRisk>;
    public arrayOfSources : Array<DoiSource>;
    public arrayOfLocations : Array<DoiLocation>;
    public arrayOfPhones : Array<DoiPhoneEntity>;
    public arrayOfNickNames : Array<DoiNickName>;
    public arrayOfEMail : Array<DoiEmailEntity>;
    public arrayOfAdditionalInfo : Array<DoiAdditionalInfo>;
    public arrayOfIdentificationDoc : Array<DoiIdentificationDocEntity>;
    public arrayOfPersonPhysChar : Array<DoiPersonPhysChar>;
    public arrayOfKeyword : Array<WorldCheckKeyword>;
    
    public nationalities : Array<Country>;
    public businessCodes : Array<BusinessCode>;
    public activities : Array<ActivityCode>;
    public professions : Array<Occupation>;
    public dobs : Date[];
    public pobs : Date[];
    public persFunction : string;
                
    public amlRisk : string;
    public title : string;
    private _honoraryTitle : string;
    public languages : string;
    public incomeSource : string;
    private _incomeSourceObj : IncomeSource;
    public customerStatus : string;
    
    public activityCode : string;
    public _activityCodeObj : ActivityCode;
    
    public comment : DoiEntityComment;

    
    constructor() {
        super();
        this.imageStatus = 1001;
        this.idxTypeOfEntity = UIConstant.PERSON_DOI_IDX; 
    }
 

    public set dob(indob : Date) {
        if (indob == null) {
            this._dob = null;
        } else {
            let inDate : Date = indob; //new Date(indob.time + Math.abs(indob.timezoneOffset * 60000));
            let notAlreadyAdded : boolean = true;
            if (this.dobs != null) {
                for (let j: number = 0; j < this.dobs.length; j++) {
                    let dateCompare:Date = this.dobs[j] as Date;
                    //TODO 
                    if (dateCompare!=null /*&& dateCompare.day == inDate.day && dateCompare.month == inDate.month && dateCompare.fullYear == inDate.fullYear*/) {
                        notAlreadyAdded = false;
                    }
                }   
            }
            
            if (notAlreadyAdded) {

                if (this._dob == null) {
                    this._dob = inDate;
                } else {
                    let physChar : DoiPersonPhysChar = new DoiPersonPhysChar();               
                    physChar.dob = inDate;
                    
                    this.arrayOfPersonPhysChar.push(physChar);
                }
            
                this.dobs.push(inDate);               
            }
        }
    }
    
    public get dob() : Date {
        return this._dob;
    }

    public set pob(inpob : string) {
        if (inpob == null) {
            this.placeOfBirth = null;
        } else {

            let notAlreadyAdded:Boolean = true;
            if (this.pobs != null) {
                for (let j: number = 0; j < this.pobs.length; j++) {
                    let pobCompare : string = this.pobs[j].toString() as string;
                    if (pobCompare == inpob) {
                        notAlreadyAdded = false;
                    }
                }   
            }

            if (notAlreadyAdded) {
                if (this.placeOfBirth == null) {
                    this.placeOfBirth = inpob;
                } else {
                    let physChar : DoiPersonPhysChar = new DoiPersonPhysChar();               
                    physChar.placeOfBirth = inpob;
                    
                    this.arrayOfPersonPhysChar.push(physChar);
                } 
                //TODO              
                //this.pobs.push(inpob);
            }
        }
    }
    
    public get pob() : string {
        return this.placeOfBirth;
    }
    
    public set dobHigh(indob : Date) {
        if (indob == null) {
            this._dobHigh = null;
        } else {
            //TODO
            this._dobHigh = new Date(/*indob.time + Math.abs(indob.timezoneOffset * 60000)*/);
        }
    }
    
    public get dobHigh() : Date {
        return this._dobHigh;
    }
    
    public set deceasedDate(indeceasedDate:Date) {
        if (indeceasedDate == null) {
            this._deceasedDate = null;
        } else {
            //TODO
            this._deceasedDate = new Date(/*indeceasedDate.time + Math.abs(indeceasedDate.timezoneOffset * 60000)*/);
        }
    }
    
    public get deceasedDate() : Date {
        return this._deceasedDate;
    }
    
    public getFormattedFullName() : string {
        let tmpFullName : string;
        if (this.lastName != null) {
            if (this.lastName.length > 0)
                tmpFullName += this.lastName.toUpperCase();
        }
        if (this.firstName != null) {
            if (this.firstName.length > 1)
                tmpFullName += ", " + this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1,this.firstName.length).toLowerCase();   
        }
        
            
        //
        if (tmpFullName.length < 3)
            if (this.fullName != null)
                tmpFullName += this.fullName;
        
        return tmpFullName;
    }
    
    public get nationality() : string {
        if (this.physCharPrim != null)
            return this.physCharPrim.nationality;
        else
            return null;
    }       
    
    public set nationality(inNat : string) {
        if (this.physCharPrim == null)
            this.physCharPrim = new DoiPersonPhysCharPrim();

        this.physCharPrim.nationality = inNat;
    }
    
    public set nationalityCountry(inNat : Country) {

        if (this.physCharPrim == null){
            this.physCharPrim = new DoiPersonPhysCharPrim();
        
            this.physCharPrim.nationalityCountry = inNat;
            this.physCharPrim.nationality = inNat ? inNat.iso3 : null;
        } else {
            let physChar : DoiPersonPhysChar = new DoiPersonPhysChar();               
            physChar.nationalityCountry = inNat;
            physChar.nationality = inNat ? inNat.iso3 : null;
            
            this.arrayOfPersonPhysChar.push(physChar);
        }
              
        this.nationalities.push(inNat);
    }
    
    public get nationalityCountry() : Country {
        if (this.physCharPrim != null) {
            return this.physCharPrim.nationalityCountry ;
        } else {
            return null;
        }
    }
    
    public get profOccupationDescription() : string {
        if (this.physCharPrim != null) {
            if (this.physCharPrim.profOccupationObj != null) {
                return this.physCharPrim.profOccupationObj.description;
            } 
            if (this.physCharPrim.profOccupation != null) {
                return this.physCharPrim.profOccupation;
            }
        } 
        return null;
    }
    
    public get legalFormDescription() : string {
        
        if (this.legalFormObj != null) {
            return this.legalFormObj.description;
        } 
        return this.legalForm;      
    }
    
    public get activityCodeDescription() : string {
        if (this.activityCodeObj != null) {
            return this.activityCodeObj.description;
        } 
        return this.activityCode;        
    }
    
    public get activityCodeObj() : ActivityCode {
        return this._activityCodeObj;    
    }
    
    public set activityCodeObj(inActivityCode : ActivityCode) {
        this._activityCodeObj = inActivityCode;
        
        if (inActivityCode == null) {
            this.activityCode = null;
        } else {
            this.activityCode = inActivityCode.uid;
        }
    }
    
    public get profOccupation() : string {
        if (this.physCharPrim == null) {
            this.physCharPrim = new DoiPersonPhysCharPrim();
        }
        
        return this.physCharPrim.profOccupation;            
    }
    
    public set profOccupation(inProfOccupation : string) {
        if (this.physCharPrim == null)
            this.physCharPrim = new DoiPersonPhysCharPrim();
        
        this.physCharPrim.profOccupation = inProfOccupation;            
    }
    
    public get profOccupationObj() : Occupation {
        if (this.physCharPrim == null) {
            this.physCharPrim = new DoiPersonPhysCharPrim();
        }
        
        return this.physCharPrim.profOccupationObj;         
    }
    
    public set profOccupationObj(inProfOccupation : Occupation) {
        if (this.physCharPrim == null)
            this.physCharPrim = new DoiPersonPhysCharPrim();
        
        this.physCharPrim.profOccupationObj = inProfOccupation;
        
        if (inProfOccupation == null) {
            this.physCharPrim.profOccupation = null;
        } else {
            this.physCharPrim.profOccupation = inProfOccupation.uid;
        }
    }
    
    public get incomeSourceDescription() : string {
        if (this.incomeSourceObj != null) {
            return this.incomeSourceObj.description;
        }
        return this.incomeSource;
    }
    
    public get incomeSourceObj() : IncomeSource {
        return this._incomeSourceObj;    
    }
    
    public set incomeSourceObj(inIncomeSource : IncomeSource) {
        this._incomeSourceObj = inIncomeSource;
        
        if (inIncomeSource == null) {
            this.incomeSource = null;
        } else {
            this.incomeSource = inIncomeSource.uid;
        }
    }
    
    public get businessCodeDescription() : string {
        if (this.businessCodeObj != null) {
            return this.businessCodeObj.description;
        }
        
        return this.businessCode;
    }
        
    public getPopupDisplay() : string {           
        return this.getFormattedFullName();
    }
    
    public getFormDefinition() {
        let formDef : {label : string, field : string}[];
        if ((this.idxTypeOfEntity == UIConstant.LEGALPERSON_IDX) || 
            (this.idxTypeOfEntity == UIConstant.LEGALARRANGEMENT_IDX)){
             formDef = 
                [
                    {"label" : "form.doiperson.name", "field" : "lastName"}                                     
                ]
            ;
        } else {            
            formDef = 
                [
                    {"label" : "form.doiperson.lastName", "field" : "lastName"},
                    {"label" : "form.doiperson.firstName", "field" : "firstName"}                   
                ]
            ;
        }
        return formDef;
    }
    
    public get longitude() : number {
        if (this._longitude != -1)
            return this._longitude;
        if (this.nationalityCountry != null)
            return this.nationalityCountry.longitude;
        if (this.countryOfBirthCountry != null)
            return this.countryOfBirthCountry.longitude;
        
        return -1;
    }
    
    public get latitude() : number {
        //trace (this._latitude);
        if (this._latitude != -1)
            return this._latitude;
        if (this.nationalityCountry != null)
            return this.nationalityCountry.latitude;
        if (this.countryOfBirthCountry != null)
            return this.countryOfBirthCountry.latitude;
        
        return -1;
    }
    
    public set longitude(inlong : number) {
        this._longitude = inlong;
    }
        
    public set latitude(inlat : number) {
        this._latitude = inlat;
    }

    
}