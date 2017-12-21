import { Component,OnInit } from '@angular/core';
import { NavController, NavParams,ActionSheetController,ViewController } from 'ionic-angular';
import { NgForm } from "@angular/forms"
import { RegisterNextPage } from './../registernext/registernext';
import { HelpPage } from './../help/help';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  helpPage = HelpPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetCtrl:ActionSheetController, private viewCtrl: ViewController) {
  }



  onSubmit(f: NgForm){
    console.log(f)
  }


  registernext(valid:any){
    if(valid)
    this.navCtrl
    .push(RegisterNextPage)
    .then(() => {
      const index = this.viewCtrl.index;
      this.navCtrl.remove(index);
    });
  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }
}