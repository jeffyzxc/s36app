import { RegisterPage } from './../register/register';
import { Component,OnInit } from '@angular/core';
import { NavController, NavParams,ActionSheetController,ViewController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { RegisterNextPage } from './../registernext/registernext';
import { HelpPage } from './../help/help';
 


@Component({
  selector: 'page-registerterms',
  templateUrl: 'registerterms.html',
})
export class RegisterTermsPage {
  
  home =HomePage;
  register = RegisterPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetCtrl:ActionSheetController, private viewCtrl: ViewController) {
  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }

  goToRegister(){
    this.navCtrl
    .push(this.register)
    .then(() => {
      const index = this.viewCtrl.index;
      this.navCtrl.remove(index);
    });
  }

  goToHome(){
    this.navCtrl.setRoot(this.home);
  }



}