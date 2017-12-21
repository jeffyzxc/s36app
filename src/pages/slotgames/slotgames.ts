import { SettingsPage } from './../settings/settings';
import { GamelistPage } from './gamelist/gamelist';
import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import slotgameData from '../../data/slotgame';
import { LoginPage } from './../login/login';

import { HelpPage } from './../help/help';

/**
 * Generated class for the SlotgamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-slotgames',
  templateUrl: 'slotgames.html',
})
export class SlotgamesPage {

  slotgameCollection:any[];
  gamelist : any;
  settingsPage : any;
  helpPage: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }

  ionViewWillLoad(){



  }
  
  ionViewDidLoad() {
    


    this.slotgameCollection = slotgameData;
    this.gamelist = GamelistPage;
    this.settingsPage = SettingsPage;
    this.helpPage = HelpPage;
    
    
   

  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');
  }

  gamelistPage(length:number,title:string,header:string){
    if(length >= 1)
      this.navCtrl.push(this.gamelist,{title:title,header:header});
      
  }

}
