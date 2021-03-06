import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HelpPage } from './../help/help';

/**
 * Generated class for the PrivatePolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-private-policy',
  templateUrl: 'private-policy.html',
})
export class PrivatePolicyPage {
  helpPage = HelpPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivatePolicyPage');
  }
  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }

}
