
import { NavController, NavParams } from 'ionic-angular';
import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'page-ali-pay-deposit',
  templateUrl: 'alipaydeposit.html',
})
export class AliPayDepositPage {

  myDate: String = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }

  onSubmit(f:NgForm){
    console.log(f);
  }

}