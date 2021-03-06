import { Component } from '@angular/core';
import {IonicPage, LoadingController, MenuController, NavController, NavParams, ToastController} from 'ionic-angular';
import {MatchProgram} from "../../models/matchProgram";
import {MatchProgramService} from "../../services/matchProgram.service";
import {Subscription} from "rxjs";

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

  ListMatchsubscription: Subscription;
  programme: MatchProgram [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtl: MenuController,
              private loadinCtl: LoadingController,
              private toastCtl: ToastController,
              private serviceMatch: MatchProgramService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchPage');
   // this.serviceMatch.saveData();
    this.onFetchist();
   // this.programme = this.serviceMatch.ListProgram.slice();
  }

  onFetchist(){
    let loader = this.loadinCtl.create({
      content: 'Chargement',
      duration: 5000,
    });
    loader.present();
    this.ListMatchsubscription  =  this.serviceMatch.ListProgram$.subscribe(
      (match : MatchProgram[]) => {
        this.programme = match
      }
    );
    this.serviceMatch.emitList();
    this.serviceMatch.retrieveData().then(
      ()=>{
        loader.dismiss();
      }
    ).catch(
      (error)=> {
        loader.dismiss();
        alert(error)
        //console.log(error);
      });
    loader.dismiss();
  }
  onToggleMenu() {
    this.menuCtl.open();
  }

}
