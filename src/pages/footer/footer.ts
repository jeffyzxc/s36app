import { Component, ViewChild, Input } from '@angular/core';
import { NavController, NavParams,Content } from 'ionic-angular';

import { AboutUsPage } from './../help/about-us/about-us';
import { BettingrulesPage } from './../bettingrules/bettingrules';
import { ResponsiblegamingPage } from './../responsiblegaming/responsiblegaming';
import { ContactusPage } from './../contactus/contactus';

import { SecurityPage } from './../security/security';
import { PrivatePolicyPage } from './../private-policy/private-policy';
import { CopyrightPage } from './../copyright/copyright';
/**
 * Generated class for the FooterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-footer',
  templateUrl: 'footer.html',
})
export class FooterPage {
  @Input() content: Content;
   copyright = CopyrightPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FooterPage');
  }
  contactUs(){
    this.navCtrl.push(ContactusPage);
  }
  aboutUs(){
    this.navCtrl.push(AboutUsPage);
  }
  responsible(){
    this.navCtrl.push(ResponsiblegamingPage);
  }
  security(){
    this.navCtrl.push(SecurityPage);
  }
  privacyPolicy(){
    this.navCtrl.push(PrivatePolicyPage);
  }
  gamingRules(){
    this.navCtrl.push(BettingrulesPage);
  }

  scrollTop(){
    this.content.scrollToTop();
    console.log("test");
  }

  copyrightLink(){
    window.open("http://m.s36.net/terms/copyright","_blank");
  }
}
