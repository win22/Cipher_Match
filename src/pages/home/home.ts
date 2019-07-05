import { Component } from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {Joueurs} from "../../models/interface-Joueurs";
import {JoueursService} from "../../services/Joueurs.service.";
import {Match} from "../../models/match";
import {MatchService} from "../../services/match.service";
import {DetailsResultatPage} from "../details-resultat/details-resultat";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ListJoueurs : Joueurs[];
  ListMatch: Match [];
  constructor(public navCtrl: NavController, private seriveJour: JoueursService, private serviceMatch: MatchService, private menuCtl: MenuController) {
    this.ListJoueurs = this.seriveJour.ListJours.slice()
    this.ListMatch = this.serviceMatch.ListMatch.slice()
  }

  showDetail(m: Match) {
    console.log(m)
    this.navCtrl.push(DetailsResultatPage, {data: m})
  }

  onToggleMenu() {
    this.menuCtl.open();
  }
}

