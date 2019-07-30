import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from "../menu/menu";
import {MatchPage} from "../match/match";
import {SettingsPage} from "../settings/settings";
import {LoginPage} from "../login/login";
import {AuthService} from "../../services/auth.service";
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage implements OnInit{
  homePage = HomePage;
  matchPage = MatchPage;
  settingsPage = SettingsPage;
  authenticated2: boolean;
  authenticated1: boolean;

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
    let authenticated3 = this.authService.loadTokenF();
    if (authenticated || authenticated3){
      this.authenticated2 = true;
    }

    else {
      this.navCtrl.push(LoginPage, {mode: 'connect'})

    }
  }


}
