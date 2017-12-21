import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HowtotransferPage } from './../howtotransfer/howtotransfer';

/**
 * Generated class for the PromotionHelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-promotion-help',
  templateUrl: 'promotion-help.html',
})
export class PromotionHelpPage {
transfer = HowtotransferPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromotionHelpPage');
  }

}
