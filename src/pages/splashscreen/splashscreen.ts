import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';

/**
 * Generated class for the SplashscreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-splashscreen',
  templateUrl: 'splashscreen.html',
})
export class SplashscreenPage {

  splash:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    setTimeout(()=> {
      this.splash = false;
      this.navCtrl.setRoot(HomePage);
    },7000);
    
  }

}
