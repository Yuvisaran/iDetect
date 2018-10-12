'use strict';

import { FieldDescription } from './../list/FieldDescription';

export class UserAlgorithmPreferences {
    
    public surNameAlgorithm : string;
    public surNameAlgorithmPercent : string;
    
    public birthNameAlgorithm : string;
    public birthNameAlgorithmPercent : string;        
    
    public givenNameAlgorithm : string;
    public givenNameAlgorithmPercent : string;
    
    public aliasAlgorithm : string;
    public aliasAlgorithmPercent : string;
    
    public lfNameAlgorithm : string;
    public lfNameAlgorithmPercent : string;
    
    public aliasList : string;
    public fullNameList : string;
    public birthNameList : string;
    
    public preferred_DateMatch_precision : string;
    
    public listOfCheckField : FieldDescription[];
    
}