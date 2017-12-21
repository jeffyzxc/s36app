import { HelpPage } from './../help/help';
import { Component,OnInit } from '@angular/core';
import { NavController, NavParams,ActionSheetController,ViewController } from 'ionic-angular';
import { NgForm } from "@angular/forms"
import { Registerstep2Page } from './../registerstep2/registerstep2';
import { LoginService } from './../../services/loginService.service';

@Component({
  selector: 'page-registernext',
  templateUrl: 'registernext.html',
})
export class RegisterNextPage {

  helpPage = HelpPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private actionSheetCtrl:ActionSheetController,public loginService:LoginService, private viewCtrl: ViewController) {

  }

  onSubmit(f: NgForm){
    console.log(f)
  }


  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');

  }

  nextPage(valid:boolean){

    if(valid){
      this.navCtrl
      .push(Registerstep2Page)
      .then(() => {
        const index = this.viewCtrl.index;
        this.navCtrl.remove(index);
      });
  
      this.loginService.userAuth.next(true);
      this.loginService.isUserLoggedIn.next(true);
    }
    }


}