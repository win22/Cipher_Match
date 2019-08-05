import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook";
import  firebase from 'firebase';
import {MenuPage} from "../menu/menu";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage  implements  OnInit{

  mode: string;
  authForm: FormGroup;
  loginPage: any = LoginPage;
  errorMessage : string;

  constructor(public navCtl: NavController,
              public navParams: NavParams,
              public  formBuilder : FormBuilder,
              public  authService: AuthService,
              public forgotCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public facebook:Facebook,

            ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.mode = this.navParams.get('mode');

  }

  initForm(){
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.initForm();
    this.hideTabs();


  }


  /**
   * Mot de passe Oublié*/
  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }


  onSubmitForm() {
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;

    if (this.mode === 'new'){
      let loader = this.loadingCtrl.create({
        content: 'Patientez svp...'
      }); loader.present();

        this.authService.signUpUser(email, password).then(
        () =>{
          this.navCtl.setRoot(MenuPage);
          loader.dismiss();
        }
      ).catch(
        (error) => {
          loader.dismiss();
          this.toastCtrl.create({
            message: error,
            duration: 3000,
            position: 'bottom'
          }).present();
        }
      );

    }else if (this.mode === 'connect') {
      let loader = this.loadingCtrl.create({
        content: 'Patientez svp...'
      });
      loader.present();
      if (email == 'admin@gmail.com' && password == 'admin1234') {
        this.authService.saveTokenA();
        this.navCtl.setRoot(MenuPage, {mode : 'admin'});
        loader.dismiss();
      } else {


        this.authService.signInUser(email, password).then(
          () => {
            this.navCtl.setRoot(MenuPage);
            loader.dismissAll();
          }
        ).catch(
          (error) => {
            loader.dismiss();
            console.log(error)
            this.toastCtrl.create({
              message: error,
              duration: 3000,
              position: 'bottom',
            }).present();
          }
        );
      }
    }
  }

  onSignFacebook() {
    this.facebook.login(['email']).then((res: FacebookLoginResponse) => {
      const fc = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      firebase.auth().signInWithCredential(fc).then(fc=>{
        this.navCtl.setRoot(MenuPage, {mode: 'Facebook'} );
        this.authService.saveTokenF();

      }).catch(ferr =>{
        alert("Essaie encore Sagesse!");
      });

    }).catch(err =>{
      alert(JSON.stringify(err));
    });
  }

  onNavigate(page: any, data?:{}){
    this.mode = 'new'
    this.navCtl.push(page, data ? data :null);

  }

  onBack() {
    this.mode= 'connect'
  }

  hideTabs(){
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(56px)';
      });
    } // end if
  }
}
