import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {TabsPage} from "../tabs/tabs";
import {ListEquipePage} from "../list-equipe/list-equipe";
import {HelpPage} from "../help/help";
import  * as firebase from  'firebase';
import {LoginPage} from "../login/login";
import {AuthService} from "../../services/auth.service";
import {ScreenPage} from "../screen/screen";
import { Facebook} from "@ionic-native/facebook";

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage implements OnInit{

  rootPage: any = TabsPage;
  equipePage: any = ListEquipePage;
  help: any = HelpPage;
  userData= null;
  mode: string;
  authenticated2: boolean;
  authenticated1: boolean;
  @ViewChild('content') content

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private  menuCtl: MenuController,
              public facebook:Facebook,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.login();
    this.mode = this.navParams.get('mode');
    if(this.mode =='Facebook') {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = {
          email: profile['email'],
          first_name: profile['first_name'],
          picture:profile['picture_large']['data']['url'],
          username:profile['name']
        }
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  onNavigatePage(page: any, data?:{}){
    this.content.setRoot(page, data ? data :null);
    this.menuCtl.close();
  }

  Deconnexion() {
  this.authService.deconnexion();
  this.menuCtl.close();
  this.navCtrl.setRoot(ScreenPage);

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
