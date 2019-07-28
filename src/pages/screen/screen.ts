import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {AuthService} from "../../services/auth.service";

import {MenuPage} from "../menu/menu";

/**
 * Generated class for the ScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
      content: 'Veuillez patienter un instant s\'il vous plait...'
    });
    loader.present();

    setTimeout(()=> {
      this.login()
      loader.dismiss();
    }, 3500)

  }
  private login(){
    let authenticated = this.authService.loadToken();
    if (authenticated){
      this.navCtrl.setRoot(MenuPage);
    } else {
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
