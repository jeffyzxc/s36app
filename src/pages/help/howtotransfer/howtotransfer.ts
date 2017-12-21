import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,Slides } from 'ionic-angular';

/**
 * Generated class for the HowtotransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-howtotransfer',
  templateUrl: 'howtotransfer.html',
})
export class HowtotransferPage {
  @ViewChild(Slides) slides:Slides;

  
  type:string;
  isHide:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HowtotransferPage');
    
    this.type = this.navParams.get('data');
    if(this.type != null && this.type == 'transfer')
        this.isHide = true;
    else
      this.isHide = false;

    console.log(this.type+" "+this.isHide);
  }

  next(){
    this.slides.slideNext();
  } 

  prev(){
    this.slides.slidePrev();
  }


}
