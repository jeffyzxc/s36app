import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RulesDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-rules-description',
  templateUrl: 'rules-description.html',
})
export class RulesDescriptionPage {

  tabs = Array<boolean>(60);
  header: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    

  }

  ionViewDidLoad() {


    this.tabs = this.tabs.fill(true);

    this.tabs[this.navParams.get('index')] = false;

    this.header = this.navParams.get('header');

  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }


}
