import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HowtotransferPage } from './../howtotransfer/howtotransfer';

/**
 * Generated class for the TransferHelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-transfer-help',
  templateUrl: 'transfer-help.html',
})
export class TransferHelpPage {
  transfer = HowtotransferPage;
  index:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

}
