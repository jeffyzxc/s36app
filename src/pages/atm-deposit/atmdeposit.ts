import { Component,OnInit } from '@angular/core';
import { NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { HelpPage } from './../help/help';


@Component({
  selector: 'page-atm-deposit',
  templateUrl: 'atmdeposit.html',
})
export class AtmDepositPage {
  helpPage = HelpPage;
  myDate: String = new Date().toISOString();


  constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetCtrl:ActionSheetController) {
  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');
  }

  onSubmit(f:NgForm){
    console.log(f);
  }



}