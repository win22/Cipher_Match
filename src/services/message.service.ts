import {Injectable} from "@angular/core";
import {Message} from "../models/message";
import {Subject} from "rxjs";
import * as firebase from "firebase";
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class MessageService {

  message: Message[]=[];
  message$ =  new  Subject<Message[]>();

  emitList(){
    this.message$.next(this.message.slice());
  }

  addMessage(mess: Message){
    this.message.push(mess);
  }

  saveData(){
    return new Promise((resolve, reject) =>{
      firebase.database().ref('message').set(this.message).then(
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
      firebase.database().ref('message').once('value').then(
        (data : DataSnapshot) =>  {
          this.message = data.val();
          this.emitList();
          resolve('Données recuperé avec succes')
        }).catch(
        (error)=>{
          reject(error)
        });
    });
  }
}

