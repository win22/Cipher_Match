import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Match} from "../../models/match";

/**
 * Generated class for the DetailsResultatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-resultat',
  templateUrl: 'details-resultat.html',
})
export class DetailsResultatPage {
  Equipe: Match;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Equipe = this.navParams.get('data');
  }

  ionViewDidLoad() {

  }

}
