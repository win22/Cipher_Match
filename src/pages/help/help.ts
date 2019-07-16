import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

  onToggleMenu() {
    this.menuCtl.open();
  }

}
