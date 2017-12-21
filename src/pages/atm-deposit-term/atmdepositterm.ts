import { Component,OnInit } from '@angular/core';
import { NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { AtmDepositPage } from './../atm-deposit/atmdeposit';
import { HelpPage } from './../help/help';

@Component({
  selector: 'page-atm-deposit-term',
  templateUrl: 'atmdepositterm.html',
})
export class AtmDepositTermPage {

  helpPage = HelpPage; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetCtrl:ActionSheetController) {
  }
  atmdeposit(){
    this.navCtrl.push(AtmDepositPage);
  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }
}