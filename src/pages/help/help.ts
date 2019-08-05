import { Component } from '@angular/core';
import {
  AlertController,
  IonicPage,
  LoadingController,
  MenuController,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import {MessageService} from "../../services/message.service";
import {Message} from "../../models/message";

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtl: LoadingController,
              public messageServi: MessageService,
              private loadinCtl: LoadingController,
              private toastCtl: ToastController,
              private callNumber: CallNumber,
              private alertCtl: AlertController,
              private menuCtl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

  onToggleMenu() {
    this.menuCtl.open();
  }

  public Call() {
    this.callNumber.callNumber("+221781578366", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  async TestUpdate() {
    let loader = await this.loadinCtl.create({
      content: 'Verification des mises à jours..',
    });
    loader.present();
    setTimeout(() => {
      this.toastCtl.create({
        message: 'Excellent vous avez la derniere version!',
        duration: 2500,
        position: 'top',

      }).present();
      loader.dismiss();
    }, 6500)

  }

  async onSubmitForm(mess: Message) {
    let loading = await this.loadingCtl.create({
      content: 'please wait...',
      duration: 5000,
    });
    loading.present();
    mess.date = new Date().getTime();
    this.messageServi.addMessage(mess);
    this.messageServi.saveData().then(()=>{
      let alert =  this.alertCtl.create({
        title: 'Message Envoyé!',
        message: "L'equipe de Cipher Vous remercie pour Votre Message.",
        buttons: ['OK']
      });
      loading.dismiss()
      alert.present();

    }).catch(
      (error)=>{
        loading.dismiss()
        alert(error)
      }
    )
  }
}
