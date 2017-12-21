import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HelpPage } from './../help/help';

/**
 * Generated class for the ResponsiblegamingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-responsiblegaming',
  templateUrl: 'responsiblegaming.html',
})
export class ResponsiblegamingPage {
  helpPage = HelpPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResponsiblegamingPage');
  }
  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }

}
