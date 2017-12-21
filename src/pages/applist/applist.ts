import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import applistData from '../../data/appList';
import { LoginPage } from './../login/login';
import { SettingsPage } from './../settings/settings';

/**
 * Generated class for the ApplistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-applist',
  templateUrl: 'applist.html',
})
export class ApplistPage {

  appListCollection:{title:string,image:string}[];
  settingsPage = SettingsPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.appListCollection = applistData;
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }

}
