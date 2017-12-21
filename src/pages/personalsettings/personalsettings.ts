import { Component,OnInit } from '@angular/core';
import { NavController, NavParams,ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-personalsettings',
  templateUrl: 'personalsettings.html',
})
export class PersonalSettingsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetCtrl:ActionSheetController) {
  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }

}