import {Component, OnInit} from '@angular/core';
import {LoadingController, MenuController, NavController, ToastController} from 'ionic-angular';
import {JoueursService} from "../../services/Joueurs.service.";
import {Match} from "../../models/match";
import {MatchService} from "../../services/match.service";
import {DetailsResultatPage} from "../details-resultat/details-resultat";
import {Subscription} from "rxjs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage implements OnInit{
  ListMatchsubscription: Subscription;
  ListMatch: Match [];
  mode: string;
  constructor(public navCtrl: NavController,
              private seriveJour: JoueursService,
              private loadinCtl: LoadingController,
              private serviceMatch: MatchService,
              private toastCtl: ToastController,

              private menuCtl: MenuController) {
    //this.ListMatch = this.serviceMatch.ListMatch.slice()
  }


  ionViewDidLoad() {
    this.onFetchist();
  }

  ngOnInit() {
   // this.serviceMatch.saveData();

  }

  showDetail(m: Match) {
    console.log(m)
    this.navCtrl.push(DetailsResultatPage, {data: m})
  }
  onLoadingdata(){

    this.ListMatch = this.serviceMatch.ListMatch.slice();
  }

  ionViewWillEnter(){
    this.onLoadingdata();
  }

  doRefresh(event){
    setTimeout(() =>{
      this.ionViewWillEnter();
      event.complete();

    }, 500);
  }

  onFetchist(){
    let loader = this.loadinCtl.create({
      content: 'Chargement'
    });
    loader.present();
    this.ListMatchsubscription  =  this.serviceMatch.ListMatch$.subscribe(
      (match : Match[]) => {
        this.ListMatch = match
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
        this.toastCtl.create({
          message: error,
          duration: 4000,
          position: 'bottom',

        }).present();
        console.log(error);
      }
    );
  }
  onToggleMenu() {
    this.menuCtl.open();
  }
}

