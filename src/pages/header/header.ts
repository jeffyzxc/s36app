import { Component,OnInit,Input } from '@angular/core';
import { NavController, NavParams,Tabs } from 'ionic-angular';

import { HomePage } from './../home/home';
import { LoginPage } from './../login/login';
import { TabsPage } from './../tabs/tabs';
import { LoginService } from './../../services/loginService.service';
import { RegisterTermsPage } from './../registerterms/registerterms';
import { SettingsPage } from './../settings/settings';
import { RegisterNextPage } from './../registernext/registernext';
import { PersonalSettingsPage } from './../personalsettings/personalsettings';
/**
 * Generated class for the HeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-header',
  templateUrl: 'header.html',
})
export class HeaderPage implements OnInit {

  public isLogin:boolean;
  
  @Input() settingsPage:boolean = false;
  settings = SettingsPage;
  psp = PersonalSettingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginService:LoginService) {

    this.loginService.isUserLoggedIn.subscribe(value => this.isLogin = value);
    
   
    
 
  }

  navigateSettings(){

    let view = this.navCtrl.getActive(); 
    if ( !(view.instance instanceof this.psp) ){
      this.navCtrl.push(this.psp);
    }
   
  }
  ngOnInit(){


  }
  signup(){
    let view = this.navCtrl.getActive(); 
    if ( !(view.instance instanceof RegisterTermsPage) ){
      this.navCtrl.push(RegisterTermsPage);
    }
    
  }


  login(){
    
    if(this.isLogin){

     // this.isLogin = this.loginService.authUser();
      this.navCtrl.setRoot(HomePage);

    } else {

      let view = this.navCtrl.getActive(); 
        if ( !(view.instance instanceof LoginPage) ){
          this.navCtrl.push(LoginPage);
        }
        
    }
  }

  signOut(){

    this.loginService.isUserLoggedIn.next(false);
    this.navCtrl.setRoot(HomePage);
  }


}
