import {Injectable} from "@angular/core";
import {Match} from "../models/match";
import {Subject} from "rxjs";
import DataSnapshot = firebase.database.DataSnapshot;
import  * as firebase from 'firebase';
Injectable()
export  class MatchService {

  ListMatch$ = new Subject<Match[]>();

  ListMatch : Match [] = [



  ]

  emitList(){
    this.ListMatch$.next(this.ListMatch.slice());
  }

  saveData(){
    return new Promise((resolve, reject) =>{
      firebase.database().ref('actualite').set(this.ListMatch).then(
        (data : DataSnapshot) =>  {
          resolve(data)
        }).catch(
        (error)=>{
          reject(error)
        });
    });
  }

  retrieveData(){
    return new Promise((resolve, reject) =>{
      firebase.database().ref('actualite').once('value').then(
        (data : DataSnapshot) =>  {
          this.ListMatch = data.val();
          this.emitList();
          resolve('Données recuperé avec succes')
        }).catch(
        (error)=>{
          reject(error)
        });
    });
  }
}
