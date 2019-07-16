import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Equipe} from "../../models/equipe";


@IonicPage()
@Component({
  selector: 'page-detail-equipe',
  templateUrl: 'detail-equipe.html',
})
export class DetailEquipePage {
  equipe: Equipe;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.equipe = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailEquipePage');


  }

}
