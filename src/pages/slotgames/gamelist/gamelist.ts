import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import gameListData from '../../../data/slotgame';
import { LoginPage } from './../../login/login';
import { SettingsPage } from './../../settings/settings';
import { HelpPage } from './../../help/help';

/**
 * Generated class for the GamelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-gamelist',
  templateUrl: 'gamelist.html',
})
export class GamelistPage {

  gameListCollection:any[];
  //gamelistData:{gamelists:{title:string,image:string}[]};
  gameCategory:string;
  header:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {

    
  }

  ionViewWillLoad(){

  }

  ionViewDidLoad() {
    this.gameCategory = this.navParams.get('title');
    this.header = this.navParams.get('header');
    this.gameListCollection = gameListData.find(x => x.title ==  this.gameCategory).gamelists;
  
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');
  }

  externalLink(link:string){
    if(link != null && link != "")
      window.open("http://m.s36.com"+link,"_blank");
  }

  filterItems(ev:any ){

    this.gameListCollection = gameListData.find(x => x.title ==  this.gameCategory).gamelists;
    
    let val = ev.target.value;

    console.log(this.gameListCollection);

    if (val && val.trim() != '') {
      this.gameListCollection = this.gameListCollection.filter(x => x.title.substring(0,val.length) == val);
    }
  }

}
