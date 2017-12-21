import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { SettingsPage } from './../settings/settings';
import { HelpPage } from './../help/help';


/**
 * Generated class for the SportsbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-sportsbook',
  templateUrl: 'sportsbook.html',
})
export class SportsbookPage {

  settingsPage = SettingsPage
  helpPage = HelpPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportsbookPage');
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');
  }

}
