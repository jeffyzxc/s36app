import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from './../settings/settings';
import { RegisterNextPage } from './../registernext/registernext';
import { LoginService } from './../../services/loginService.service';
import { RegisterTermsPage } from './../registerterms/registerterms';

/**
 * Generated class for the PromotiondetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({

  selector: 'page-promotiondetails',
  templateUrl: 'promotiondetails.html',

})
export class PromotiondetailsPage {

  page:boolean[] = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];

  isLogin:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,private loginSrvc:LoginService) {

    this.loginSrvc.isUserLoggedIn.subscribe(value => this.isLogin = value);

  }

  ionViewWillLoad() {

    this.page[this.navParams.get('id')] = false;

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad PromotiondetailsPage');

  }


  getPromo(){

    if(this.isLogin){
      window.open("www.s36yh.com","_blank");
    } else {
      this.navCtrl.push(RegisterTermsPage);
    }

  } 

}
