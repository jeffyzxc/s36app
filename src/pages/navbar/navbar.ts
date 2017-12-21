import { NavController, NavParams } from 'ionic-angular';
import { Component,Input } from '@angular/core';
import { HelpPage } from './../help/help';
import { WithdrawHelpPage } from './../help/withdraw-help/withdraw-help';
import { PromotionHelpPage } from './../help/promotion-help/promotion-help';
import { HowtotransferPage } from './../help/howtotransfer/howtotransfer';
import { DepositHelpPage } from './../help/deposit-help/deposit-help';
import { AccountHelpPage } from './../help/account-help/account-help';
import { AboutUsPage } from './../help/about-us/about-us';
import { HomePage } from './../home/home';
import { LoginService } from './../../services/loginService.service';
import { TransferHelpPage } from './../help/transfer-help/transfer-help';
/**
 * Generated class for the NavbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-navbar',
  templateUrl: 'navbar.html',
})
export class NavbarPage {


 
  canGoback:boolean;
  @Input() titleText:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loginSrvc:LoginService) {
    
    this.loginSrvc.canGoBack.subscribe(value => this.canGoback = value);
   
  }

  navigateHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

  navigateHelpPage(){
      
    let view = this.navCtrl.getActive(); 
    let prev = this.navCtrl.getPrevious();
    
    if ( !(view.instance instanceof HelpPage) &&
      !(view.instance instanceof AboutUsPage) && 
      !(view.instance instanceof AccountHelpPage) && 
      !(view.instance instanceof DepositHelpPage) && 
      !(view.instance instanceof HowtotransferPage) && 
      !(view.instance instanceof PromotionHelpPage) && 
      !(view.instance instanceof WithdrawHelpPage) && 
      !(view.instance instanceof TransferHelpPage) ){

      this.navCtrl.push(HelpPage);
    } else {
      console.log("test");
    }

  }

  contactCostumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }

}
