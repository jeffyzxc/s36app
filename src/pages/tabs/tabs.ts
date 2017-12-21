import { Component, ViewChild } from '@angular/core';
import { NavController,Tabs,App, ToastController,AlertController } from 'ionic-angular';

import { DepositPage } from './../deposit/deposit';
import { BalancePage } from './../balance/balance';
import { WithdrawPage } from './../withdraw/withdraw';
import { PersonalSettingsPage } from './../personalsettings/personalsettings';
import { HistoryRecordsPage } from './../historyrecords/historyrecords';
import { TransferPage } from './../transfer/transfer';
import { HomePage } from './../home/home';
import { LoginPage } from './../login/login';

import { LoginService } from './../../services/loginService.service';



@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage { 
  @ViewChild('myTabs') tabRef: Tabs;
  
  private app: App
  
  login:LoginPage;
  
  home:any;
  balance:any;
  withdraw:any;
  transfer:any;
  history:any;
  personal:any;
  isLogin:boolean;
  

  constructor(private navCtrl:NavController,public loginSrvc:LoginService,private toastCtrl: ToastController,private alertCtrl: AlertController) {

    this.home = HomePage;
    this.loginSrvc.isUserLoggedIn.subscribe(value => this.isLogin = value);


  }
    

  loginNotify(){
    if(this.isLogin){
      this.home = HomePage;
      this.balance = BalancePage;
      this.withdraw = WithdrawPage;
      this.transfer = TransferPage;
      this.history = HistoryRecordsPage;
      this.personal = PersonalSettingsPage;
    } else {
      this.navCtrl.setRoot(TabsPage);
      this.navCtrl.push(LoginPage);
    }
    
  }



  pages(name:string){
    
    if(this.loginSrvc.getAuth()){
      return BalancePage;
    } 



    return null;
  }



}
