import { Component,ViewChild  } from '@angular/core';
import { NavController,Slides,PopoverController } from 'ionic-angular';

import { LivecasinoPage } from './../livecasino/livecasino';
import { SlotgamesPage } from './../slotgames/slotgames';
import { SportsbookPage } from './../sportsbook/sportsbook';
import { ApplistPage } from './../applist/applist';
import { BigwinPage } from './../bigwin/bigwin';
import { LoginPage } from './../login/login';
import { SettingsPage } from './../settings/settings';
import { HelpPage } from './../help/help';
import { PromotionPage } from './../promotion/promotion';
import { NoticePage } from './../notice/notice';
import { FishingPage } from './../fishing/fishing';
import { LottoPage } from './../lotto/lotto';

import { LoginService } from './../../services/loginService.service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  items: String[];
  pages: any[];
  helpPage = HelpPage;
  isLogin:boolean;
  @ViewChild(Slides) slides:Slides;

  constructor(public navCtrl: NavController,private loginSrvc:LoginService,private popoverCtrl:PopoverController) {
   

  }


  showNotice(){
    const notice = this.popoverCtrl.create(NoticePage);

    notice.present(); 
  }

  ionViewDidLoad()  {


  

        this.pages = [LivecasinoPage,SlotgamesPage,SportsbookPage,
          FishingPage,LottoPage,PromotionPage,
          null,BigwinPage,null
          ,SettingsPage];
  
        this.items = ["Index01","Index02","Index03",
                      "Index04","Index05","Index06",
                      "Index07","Index08","Index09"];
        

    


    this.isLogin = this.loginSrvc.getAuth();

 
  }


  ionViewWillEnter(){
    this.loginSrvc.canGoBack.next(false);
  }

  ionViewWillLeave(){
    this.loginSrvc.canGoBack.next(true);
  }

  ionViewDidEnter(){
    
  }

  stackPage(index:number){
 
    if(this.pages[index])
      this.navCtrl.push(this.pages[index]);

  }

  costumerService(){
    window.open('https://chatserver.comm100.com/chatwindow.aspx?planId=441&visitType=1&byHref=1&partnerid=-1&siteId=217937','_target');
  }

  next(){
    this.slides.slideNext();
  } 

  prev(){
    this.slides.slidePrev();
  }

}
