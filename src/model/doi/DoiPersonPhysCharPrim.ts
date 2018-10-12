'use strict';

import { DoiBaseInfo } from './DoiBaseInfo';
import { BusinessCode } from './../lookup/BusinessCode';
import { Country } from './../lookup/Country';
import { Occupation } from './../lookup/Occupation';



export class DoiPersonPhysCharPrim extends DoiBaseInfo {
   
    public uid : string;
    public uidDPer : string;
    public nationality : string;
    public languages : string;
    public businessCode : string;
    public businessCodeObj : BusinessCode;
    public profOccupation : string;
    public profOccupationObj : Occupation;
    public originalId : string;
    public uidList : string;
    public nationalityCountry : Country;
    public version : number;
    
    constructor() {
        super(); 
    }
}