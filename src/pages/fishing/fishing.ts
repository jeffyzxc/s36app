import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FishingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-fishing',
  templateUrl: 'fishing.html',
})
export class FishingPage {

  fishingList:String[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  /*
  ionViewWillEnter() {
    this.fishingList = ["sa","ag","gg"];
  }
  */

  ionViewDidLoad(){
    this.fishingList = ["sa","ag","gg"];
  }

}
