import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Tabs } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SplashscreenPage } from './../pages/splashscreen/splashscreen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = SplashscreenPage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp() {

    this.platform.ready().then(() => {
      // do whatever you need to do here.
      this.statusBar.styleDefault();
        this.splashScreen.hide();
    });
  }

}
