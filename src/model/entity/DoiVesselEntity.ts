'use strict';

import { UIConstant } from './../../constants/UIConstant';
import { BasicEntity } from './BasicEntity';
import { DoiRisk } from './../doi/DoiRisk';
import { DoiSource } from './../doi/DoiSource';
import { DoiIdentificationDocEntity } from './DoiIdentificationDocEntity';

export class DoiVesselEntity extends BasicEntity {
    
    public name : string;
    public imo : string;
    public mmsi : string;
    public shipType : string;
    public description : string;
    public buildDate : Date;
    public gt : number;
    public teu : string;
    public length : number;
    public originalId : string;
    public version : string;
    
    public arrayOfRisks : DoiRisk[];
    public arrayOfSources : DoiSource[];
    public arrayOfIdentificationDoc : DoiIdentificationDocEntity[];    
    
    constructor() {
        super()
        this.idxTypeOfEntity=UIConstant.VESSEL_DOI_IDX;
    }
        
    public getFormDefinition()  {
        let formDef : {label : string, field : string}[] = 
            [
                {label:"form.doivessel.name", field:"name"}
            ]
        ;
        return formDef;
    }
    
    public getFormattedFullName() : string {
        if (this.name != null) {
            return this.name;
        } else {
            return "";
        }
    }
    
    public getPopupDisplay() : string {
        return this.getFormattedFullName();
    }
    
    public toString() : string {
        return this.getFormattedFullName();
    }
    
    public equals(tmpVessel : DoiVesselEntity) : boolean {
        if (this.mmsi != null) {
            if (tmpVessel.mmsi == this.mmsi)
                return true;
        }
        return false;
    }
}