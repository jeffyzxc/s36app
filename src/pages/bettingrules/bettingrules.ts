import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RulesDescriptionPage } from './../bettingrules/rules-description/rules-description';

/**
 * Generated class for the BettingrulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-bettingrules',
  templateUrl: 'bettingrules.html',
})
export class BettingrulesPage {

description = RulesDescriptionPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BettingrulesPage');

  }
  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }

}
