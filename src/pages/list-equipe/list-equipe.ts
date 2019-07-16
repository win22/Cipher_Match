import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {Equipe} from "../../models/equipe";
import {EquipeService} from "../../services/equipe.service";
import {DetailEquipePage} from "../detail-equipe/detail-equipe";

@IonicPage()
@Component({
  selector: 'page-list-equipe',
  templateUrl: 'list-equipe.html',
})
export class ListEquipePage {
  List: Equipe[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private listEquipeService: EquipeService, private menuCtl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListEquipePage');
    this.List = this.listEquipeService.ListEquipe.slice();
  }

  onToggleMenu() {
    this.menuCtl.open();
  }

  showDetail(e: Equipe){
    this.navCtrl.push(DetailEquipePage, {data: e});
  }
}
