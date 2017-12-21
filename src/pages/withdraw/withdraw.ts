import { Component,OnInit } from '@angular/core';
import { NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { NgForm } from "@angular/forms"
import { HelpPage } from './../help/help';
import { HomePage } from './../home/home';

@Component({
  selector: 'page-withdraw',
  templateUrl: 'withdraw.html',
})
export class WithdrawPage {

  helpPage = HelpPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetCtrl:ActionSheetController) {

  }

  onSubmit(f: NgForm){
    console.log(f)
  }

}