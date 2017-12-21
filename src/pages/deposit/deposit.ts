import { Component,OnInit } from '@angular/core';
import { NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { AtmDepositTermPage } from './../atm-deposit-term/atmdepositterm';
import { AliPayDepositPage } from './../ali-pay-deposit/alipaydeposit';

import { SettingsPage } from './../settings/settings';
import { HelpPage } from './../help/help';

@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html',
})
export class DepositPage {

  settingsPage = SettingsPage
  helpPage = HelpPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetCtrl:ActionSheetController) {
  }
  atmdepositterm(){
    this.navCtrl.push(AtmDepositTermPage);
  }
  alipaydeposit(){
    this.navCtrl.push(AliPayDepositPage);
  }
}