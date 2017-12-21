import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { PromotionPage } from './../promotion/promotion';
import { DepositPage } from './../deposit/deposit';
/**
 * Generated class for the Registerstep2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registerstep2',
  templateUrl: 'registerstep2.html',
})
export class Registerstep2Page {

  deposit = DepositPage;
  promotion = PromotionPage;
  home = HomePage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registerstep2Page');
  }

  goToDeposit(){

    this.navCtrl
    .push(this.deposit)
    .then(() => {
      const index = this.viewCtrl.index;
      this.navCtrl.remove(index);
    });

  }
  goToPromotion(){
    
    this.navCtrl
    .push(this.promotion)
    .then(() => {
      const index = this.viewCtrl.index;
      this.navCtrl.remove(index);
    });
    
  }
  goToHome(){
    this.navCtrl.setRoot(this.home);
  }

}
