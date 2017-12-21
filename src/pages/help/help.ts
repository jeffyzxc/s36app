
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AboutUsPage } from './../help/about-us/about-us';
import { TransferHelpPage } from './../help/transfer-help/transfer-help';
import { AccountHelpPage } from './../help/account-help/account-help';
import { DepositHelpPage } from './../help/deposit-help/deposit-help';
import { WithdrawHelpPage } from './../help/withdraw-help/withdraw-help';
import { PromotionHelpPage } from './../help/promotion-help/promotion-help';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {


  page = [AboutUsPage,DepositHelpPage,
    TransferHelpPage,WithdrawHelpPage,
    AccountHelpPage,PromotionHelpPage];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }





  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

}
