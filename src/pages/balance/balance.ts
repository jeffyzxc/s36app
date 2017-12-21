import { Component,OnInit } from '@angular/core';
import { NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { HelpPage } from './../help/help';
import { HomePage } from './../home/home';
import { DepositPage } from './../deposit/deposit';
import { TransferPage } from './../transfer/transfer';
import { WithdrawIndexPage } from './../withdraw-index/withdrawindex';

@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html',
})
export class BalancePage {

  helpPage = HelpPage;
  deposit = DepositPage;
  withdraw = WithdrawIndexPage
  constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetCtrl:ActionSheetController) {
  }

  home(){
    this.navCtrl.setRoot(TransferPage);
  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }
}