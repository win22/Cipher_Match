import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from "../menu/menu";
import {MatchPage} from "../match/match";
import {SettingsPage} from "../settings/settings";
import {LoginPage} from "../login/login";
import {AuthService} from "../../services/auth.service";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage implements OnInit{
  homePage = MenuPage;
  matchPage = MatchPage;
  settingsPage = SettingsPage;
  authenticated2: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public authService: AuthService,
              ) {

  }

  ngOnInit(): void {
    this.login();
  }

  ionViewDidLoad() {
  this.login();
    console.log('ionViewDidLoad TabsPage');

  }
  private login(){
    let authenticated = this.authService.loadToken();
    if (authenticated){
      //this.navCtrl.setRoot(MenuPage)
      this.authenticated2 = true;
    } else {
      this.navCtrl.push(LoginPage, {mode: 'connect'})



    }
  }


}
