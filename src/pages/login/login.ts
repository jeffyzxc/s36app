import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginService } from './../../services/loginService.service';
import { RegisterPage} from './../register/register';
import { HomePage } from './../home/home';
import { TransferPage } from './../transfer/transfer';
import { TabsPage } from './../tabs/tabs';
import { RegisterNextPage } from './../registernext/registernext';
import { RegisterTermsPage } from './../registerterms/registerterms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loginService:LoginService) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }
  
  signin(){
    this.loginService.userAuth.next(true);
    this.loginService.isUserLoggedIn.next(true);
    this.navCtrl.setRoot(HomePage);
  }

  signup(){
 
    this.navCtrl.push(RegisterTermsPage);
  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }
  

}
