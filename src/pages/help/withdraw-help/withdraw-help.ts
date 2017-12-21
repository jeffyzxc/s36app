import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HowtotransferPage } from './../howtotransfer/howtotransfer';

/**
 * Generated class for the WithdrawHelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-withdraw-help',
  templateUrl: 'withdraw-help.html',
})
export class WithdrawHelpPage {
  transfer = HowtotransferPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawHelpPage');
  }

}
