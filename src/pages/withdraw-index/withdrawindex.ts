import { Component,OnInit } from '@angular/core';
import { NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { WithdrawPage } from './../withdraw/withdraw';
import { HelpPage } from './../help/help';

@Component({
  selector: 'page-withdraw-index',
  templateUrl: 'withdrawindex.html',
})
export class WithdrawIndexPage {
  helpPage = HelpPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetCtrl:ActionSheetController) {
  }
  withdraw(){
    this.navCtrl.push(WithdrawPage);
  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }
}