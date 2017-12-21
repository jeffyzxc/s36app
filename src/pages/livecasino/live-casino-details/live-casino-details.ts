import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import livecasinoData from '../../../data/livecasino';
import { LoginPage } from './../../login/login';
import { HelpPage } from './../../help/help';
import { SettingsPage } from './../../settings/settings';


/**
 * Generated class for the LiveCasinoDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-live-casino-details',
  templateUrl: 'live-casino-details.html',
})
export class LiveCasinoDetailsPage implements OnInit{

  category:string;
  header:string;
  settingsPage = SettingsPage;
  livecasinoCollection:any[];

  helpPage = HelpPage;
  //{image:string,title:string,
  //descriptions:{title:string,
   // description:{dtitle:string,detail:string}[] }[] }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit(){

  }

  ionViewDidLoad(){

  }
  
  ionViewWillLoad(){
    
    this.category = this.navParams.get('category');
    //this.header = this.navParams.get('header');
    this.livecasinoCollection = livecasinoData;
    this.livecasinoCollection = this.livecasinoCollection.filter(x => x.title == this.category);
    this.header = this.livecasinoCollection[0].descriptions[0].title;
    console.log(this.header);
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  signup(){
    window.open('http://m.s36.com/Account/RegisterTerms','_target');
  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');
  }

  play(link:string){
    
    if(link != null || link != "")
      window.open(link,"_blank");
  
  }

}
