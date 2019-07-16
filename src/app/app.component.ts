import {Component, OnInit, ViewChild} from '@angular/core';
import {LoadingController, Nav, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {TabsPage} from "../pages/tabs/tabs";
import * as firebase from 'firebase';
import {LoginPage} from "../pages/login/login";
import {AuthService} from "../services/auth.service";
import {MenuPage} from "../pages/menu/menu";
import {ScreenPage} from "../pages/screen/screen";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ScreenPage;
  @ViewChild('content') nav: NavController
  constructor( public platform: Platform,

               public statusBar: StatusBar,
             //  public splashScreen: SplashScreen,
               public loadingCtl: LoadingController,
               public authService : AuthService ) {
    platform.ready().then(() => {
     statusBar.styleDefault();
    /*  if (platform.is('android')) {
        statusBar.backgroundColorByHexString("#33000000");

      }*/
     // splashScreen.hide();
    });
  }



  onNavigatePage() {

  }




}

