'use strict';

import { Currencies } from './../lookup/Currencies';
import { DoiBaseInfo } from './DoiBaseInfo';

export class DoiAccountBalance extends DoiBaseInfo {
   
    public uid : string;
    
    public originalAmountBalance : number;
    public baseAmountBalance : number;
    public localAmountBalance : number;
    public balanceDate : Date;
    public uidTbl : string;
    public baseCurrency : string;
    public baseCurrencyObj : Currencies;
    public localCurrency : string;
    public localCurrencyObj : Currencies;
    public originalCurrency : string;
    public originalCurrencyObj : Currencies;
    
    public version : number;
    public originId : string;
    public orgUnitId : number;
    public listId : string;
        
    //private dateFormatter:DateFormatter = new DateFormatter("DD-MM-YYYY at JJ:NN:SS"); //TODO new Date() not enough ? might be possible to format the date
    //private numberFormatter : numberFormatter; //TODO use Intl.NumberFormat() ?
        
        public constructor()
        {
            super();
            /*
            numberFormatter = new NumberFormatter();
            numberFormatter.decimalSeparator=",";
            numberFormatter.fractionalDigits=2;
            numberFormatter.groupingSeparator=".";
            numberFormatter.groupingPattern="3;*";
            numberFormatter.useGrouping=true;
            */
        }
       
    //TODO
        public toString() : string {
            let str : string = "";
            
            if (this.baseAmountBalance) {
 //               str += numberFormatter.format(this.baseAmountBalance);
                
                if (this.baseCurrencyObj) {
                    str += " " + this.baseCurrencyObj.iso3;
                }
            } else if (this.localAmountBalance) {
  //              str += numberFormatter.format(this.localAmountBalance);
                
                if (this.localCurrencyObj) {
                    str += " " + this.localCurrencyObj.iso3;
                }
            } else if (this.originalAmountBalance) {
   //             str += numberFormatter.format(this.originalAmountBalance);
                
                if (this.originalCurrencyObj) {
                    str += " " + this.originalCurrencyObj.iso3;
                }
            }
            
            if (this.balanceDate) {
    //            str += " (" + dateFormatter.format(this.balanceDate)+ ")";
            }
            
            return str;
        }
        
        public getFormattedFullName() : string {
            return this.toString();
        }
}