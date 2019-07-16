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


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage implements OnInit{

  rootPage: any = HomePage;
  equipePage: any = ListEquipePage;
  help: any = HelpPage;

  @ViewChild('content') content

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private  menuCtl: MenuController,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.login();
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
    if (authenticated){
      //this.navCtrl.setRoot(MenuPage)
    } else {
      this.navCtrl.setRoot(LoginPage, {mode: 'connect'})
    }
  }

}
