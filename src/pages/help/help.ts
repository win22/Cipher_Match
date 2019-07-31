import { Component } from '@angular/core';
import {IonicPage, LoadingController, MenuController, NavController, NavParams, ToastController} from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private loadinCtl: LoadingController,
              private toastCtl: ToastController,
              private callNumber: CallNumber,
              private menuCtl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

  onToggleMenu() {
    this.menuCtl.open();
  }

  public Call(){
    this.callNumber.callNumber("+221781578366", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  TestUpdate() {
    let loader = this.loadinCtl.create({
      content: 'Verification des mises à jours..',
    });
    loader.present();
    setTimeout(()=> {
      this.toastCtl.create({
        message : 'Excellent vous avez la derniere version!',
        duration: 2500,
        position: 'top',

      }).present();
      loader.dismiss();
    }, 6500)

  }
}
