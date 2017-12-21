import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PromotiondetailsPage } from './../promotiondetails/promotiondetails';

/**
 * Generated class for the PromotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-promotion',
  templateUrl: 'promotion.html',
})
export class PromotionPage {

  arr:any = [19,20,1,2,3,4];
  hideButton:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromotionPage');
  }

  stackPage(i:number){
    this.navCtrl.push(PromotiondetailsPage,{id:i});
  }

  showMore(){
    this.hideButton = false;
    this.arr =  [19,20,1,2,3,4,6,5,13,7,8,9,10,14,11,15,16,17,18,12];
  }

  showButton(selectedValue:any){
    
    if(selectedValue == 'all'){
      this.hideButton = true; 
      this.arr = [19,20,1,2,3,4];
      
    }



  }

}
