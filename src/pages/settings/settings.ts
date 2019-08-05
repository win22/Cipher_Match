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
import {MatchProgram} from "../../models/matchProgram";
import { Camera, CameraOptions } from '@ionic-native/camera';
import {MatchProgramService} from "../../services/matchProgram.service";
import {Subscription} from "rxjs";
import {MessageService} from "../../services/message.service";
import {Message} from "../../models/message";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  ListMessagesubscription: Subscription;
  ListMessage : Message[];
  image1 : string;
  image2: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtl: LoadingController,
              public camera: Camera,
              private toastCtl: ToastController,
              private loadinCtl: LoadingController,
              public matchService : MatchProgramService,
              public messageService: MessageService,
              private alertCtl: AlertController,
              private menuCtl: MenuController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggleMenu() {
    this.menuCtl.open();
  }


  public async onPicture() {
    const option1: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true,
    };
    const option2: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
    };
    let alert = await this.alertCtl.create({
      title:  'Confirmation',
      message: 'Choisissez une source',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this.getPicture(option1)
          }
        },
        {
          text: 'Galerie',
          handler: () => {
            this.getPicture(option2);
          }
        }
      ]
    });
    await alert.present();
  }

  public async onPicture2() {
    const option1: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true,
    };
    const option2: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
    };
    let alert = await this.alertCtl.create({
      title:  'Confirmation',
      message: 'Choisissez une source',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this.getPicture2(option1)
          }
        },
        {
          text: 'Galerie',
          handler: () => {
            this.getPicture2(option2);
          }
        }
      ]
    });
    await alert.present();
  }
  public getPicture(params: CameraOptions){
    this.camera.getPicture(params).
    then(data=>{
      let base64Img =  'data:image/jpeg;base64,' + data;
      this.image1 = base64Img;
    });
  }
  public getPicture2(params: CameraOptions){
    this.camera.getPicture(params).
    then(data=>{
      let base64Img2 =  'data:image/jpeg;base64,' + data;
      this.image2 = base64Img2;
    });
  }

  onSubmitForm(match: MatchProgram) {
    let loading = this.loadingCtl.create({
      content:  'please wait...'
    });
    loading.present();
    match.images = [this.image1, this.image2];
    console.log(match);
    this.matchService.addProgramme(match);
    this.matchService.saveData().then(()=>{
      loading.dismiss();

    });
    loading.dismiss();

  }

}
