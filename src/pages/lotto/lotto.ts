import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import lottoData from "../../data/lotto";
/**
 * Generated class for the LottoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lotto',
  templateUrl: 'lotto.html',
})
export class LottoPage {


  lottoCollection:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.lottoCollection = lottoData;
  }

  ionViewWillLoad(){
  
  }


  filter(value:string){

    this.lottoCollection = lottoData;
    if(value != "all"){
      this.lottoCollection = this.lottoCollection.filter(x => x.category == value);
    }


  }



}
