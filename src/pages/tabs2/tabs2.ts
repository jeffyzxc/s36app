import { LoginPage } from './../login/login';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PersonalSettingsPage } from './../personalsettings/personalsettings';
import { TransferPage } from './../transfer/transfer';
import { HistoryRecordsPage } from './../historyrecords/historyrecords';
import { WithdrawPage } from './../withdraw/withdraw';
import { BalancePage } from './../balance/balance';
import { HomePage } from './../home/home';
import { LoginService } from './../../services/loginService.service';
/**
 * Generated class for the Tabs2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-tabs2',
  templateUrl: 'tabs2.html',
})
export class Tabs2Page {

  @Input() activeHome:boolean = false;
  @Input() activeBalance:boolean = false;
  @Input() activeTransfer:boolean = false;
  @Input() activeHistory:boolean = false;
  @Input() activePersonal:boolean = false;

  home = HomePage;
  balance = BalancePage;
  withdraw = WithdrawPage;
  transfer = TransferPage;
  history = HistoryRecordsPage;
  personal = PersonalSettingsPage;
  login = LoginPage
  isLogin:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,private loginSrvc:LoginService) {

    this.loginSrvc.isUserLoggedIn.subscribe(value => this.isLogin = value);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs2Page');
  }



  navigateTab(page:any) {

    console.log(page);


    let view = this.navCtrl.getActive(); 
    if ( !(view.instance instanceof page) && this.isLogin ){
      this.navCtrl.push(page);
    } else if(!(view.instance instanceof LoginPage) && !this.isLogin){
      this.navCtrl.push(LoginPage);
    } 
   
    
  
  }

  pages(name:string) : any{
    switch(name){
      case "home":
        return this.home;
      case "balance":
        return this.balance;
      case "withdraw":
        return this.withdraw;
      case "history":
        return this.history;
      case "personal": 
        return this.personal;
      case "login":
        return this.login;
    }

    return null;
  }

  signout(){
    this.loginSrvc.isUserLoggedIn.next(false);
    this.navCtrl.setRoot(this.home);
  }

  signin(){
    this.navCtrl.push(LoginPage);
    console.log("login");
  }



  goToRoot() {

    this.navCtrl.setRoot(this.home);

  }
}
