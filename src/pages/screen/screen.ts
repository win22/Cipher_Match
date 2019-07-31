import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {AuthService} from "../../services/auth.service";

import {MenuPage} from "../menu/menu";

@IonicPage()
@Component({
  selector: 'page-screen',
  templateUrl: 'screen.html',
})
export class ScreenPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthService,
              private loadingCtrl: LoadingController) {
  }

 async ionViewDidLoad() {
    console.log('ionViewDidLoad ScreenPage');
    this.hideTabs();
    let loader = await this.loadingCtrl.create({
      content: 'Veuillez patienter un instant...'
    });
    loader.present();

    setTimeout(()=> {
      this.login()
      loader.dismiss();
    }, 3500)

  }
  private login(){
    let authenticated = this.authService.loadToken();
    let authenticated2 = this.authService.loadTokenF();
    let authenticated3 = this.authService.loadTokenA();
    if (authenticated ){
      this.navCtrl.setRoot(MenuPage);
    }
    else if (authenticated2){
      this.navCtrl.setRoot(MenuPage, {mode: 'Facebook'});
    }
    else if (authenticated3){
      this.navCtrl.setRoot(MenuPage, {mode: 'admin'});
    }
    else {
      this.navCtrl.setRoot(LoginPage, {mode: 'connect'})
    }
  }





  hideTabs(){
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(56px)';
      });
    } // end if
  }
}
