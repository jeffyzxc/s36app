import { Component,OnInit } from '@angular/core';
import { NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { HelpPage } from './../help/help';


@Component({
  selector: 'page-historyrecords',
  templateUrl: 'historyrecords.html',
})
export class HistoryRecordsPage {
  helpPage = HelpPage;
  myDateFrom: String = new Date().toISOString();
  myDateTo: String = new Date().toISOString();
  constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetCtrl:ActionSheetController) {
  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }

}