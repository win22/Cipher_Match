import {Injectable} from "@angular/core";
import {MatchProgram} from "../models/matchProgram";
import {Subject} from "rxjs";
import * as firebase from "firebase";
import DataSnapshot = firebase.database.DataSnapshot;

Injectable()

export class MatchProgramService {
  ListProgram$ = new Subject<MatchProgram[]>();
  ListProgram: MatchProgram[] = [

  ]

  emitList(){
    this.ListProgram$.next(this.ListProgram.slice());
  }

  saveData(){
    return new Promise((resolve, reject) =>{
      firebase.database().ref('programme').set(this.ListProgram).then(
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
      firebase.database().ref('programme').once('value').then(
        (data : DataSnapshot) =>  {
          this.ListProgram = data.val();
          this.emitList();
          resolve('Données recuperé avec succes')
        }).catch(
        (error)=>{
          reject(error)
        });
    });
  }
}


