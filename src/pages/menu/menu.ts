import {Component, ViewChild} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {TabsPage} from "../tabs/tabs";
import {ListEquipePage} from "../list-equipe/list-equipe";


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage: any = HomePage;
  equipePage: any = ListEquipePage;
  @ViewChild('content') content



  constructor(public navCtrl: NavController, public navParams: NavParams, private  menuCtl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  onNavigatePage(page: any, data?:{}){
    this.content.setRoot(page, data ? data :null);
    this.menuCtl.close();
  }
}
