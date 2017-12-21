import { SettingsPage } from './../settings/settings';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import livecasinoData from '../../data/livecasino';
import { LiveCasinoDetailsPage } from './../livecasino/live-casino-details/live-casino-details';
import { LoginPage } from './../login/login';
import { HelpPage } from './../help/help';
/**
 * Generated class for the LivecasinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-livecasino',
  templateUrl: 'livecasino.html',
})
export class LivecasinoPage {

  
  LcDetail = LiveCasinoDetailsPage;
  liveCasinoCollection:any[];
  settingsPage = SettingsPage;
  helpPage = HelpPage;
  /*{image:string,
                        descriptions:{ title:string, 
                            description:{title:string,detail:string}[]
                            ,image:string }[],
                        
                       }[]
  */
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
      this.liveCasinoCollection = livecasinoData;
  }

  pushDetails(category:string,header:string){
    
    if(category != null && category != "")
      this.navCtrl.push(this.LcDetail,{category:category,header:header});

    console.log(category);
  }


  login(){
    this.navCtrl.push(LoginPage);
  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }

}
