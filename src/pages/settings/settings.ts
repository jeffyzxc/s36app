import { HelpPage } from './../help/help';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BalancePage } from './../balance/balance';
import { DepositPage } from './../deposit/deposit';
import { WithdrawIndexPage } from './../withdraw-index/withdrawindex';
import { TransferPage } from './../transfer/transfer';
import { HistoryRecordsPage } from './../historyrecords/historyrecords';
import { PersonalSettingsPage } from './../personalsettings/personalsettings';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  settingsList:string[];
  settingsPages:any[];
  helpPage = HelpPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillLoad(){
    this.settingsList = ["member1","member2","member3",
                         "member4","member5","member6"];

    this.settingsPages = [BalancePage,DepositPage,
                        WithdrawIndexPage,TransferPage,
                        HistoryRecordsPage,PersonalSettingsPage];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  
  stackPage(index:number){

    this.navCtrl.push(this.settingsPages[index]);

  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }


}
