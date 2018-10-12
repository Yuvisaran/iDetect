'use strict';

import { UIConstant } from './../../constants/UIConstant';
import { BasicEntity } from './BasicEntity';

export class DoiWordsEntity extends BasicEntity {
    
    public category : string;
    public word : string;
    public originId : string;
    public orgUnitId : number;
    
    public version : number;
    
    public DoiWordsEntity(){
        this.idxTypeOfEntity = UIConstant.WORDS_DOI_IDX;
    }
    
    public getFormattedFullName() : string {
        if (this.word != null) {
            return this.word;
        } else {
            return "";
        }
    }
    
    public getPopupDisplay() : string {
        return this.getFormattedFullName();
    }    
}