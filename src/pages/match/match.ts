import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MatchProgram} from "../../models/matchProgram";
import {MatchProgramService} from "../../services/matchProgram.service";

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

  programme: MatchProgram [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private serviceMatch: MatchProgramService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchPage');
    this.programme = this.serviceMatch.ListProgram.slice();
  }

}
