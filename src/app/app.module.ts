import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {JoueursService} from "../services/Joueurs.service.";
import {DetailsResultatPage} from "../pages/details-resultat/details-resultat";
import {MatchService} from "../services/match.service";
import {MenuPage} from "../pages/menu/menu";
import {TabsPage} from "../pages/tabs/tabs";
import {ListEquipePage} from "../pages/list-equipe/list-equipe";
import {EquipeService} from "../services/equipe.service";

import * as firebase from 'firebase';
import { Facebook} from "@ionic-native/facebook";
import {MatchPage} from "../pages/match/match";
import {MatchProgramService} from "../services/matchProgram.service";
import {SettingsPage} from "../pages/settings/settings";
import {DetailEquipePage} from "../pages/detail-equipe/detail-equipe";
import {LoginPage} from "../pages/login/login";
import {AuthService} from "../services/auth.service";
import {IonicStorageModule} from "@ionic/storage";
import {ScreenPage} from "../pages/screen/screen";
import {HelpPage} from "../pages/help/help";
import {CallNumber} from "@ionic-native/call-number";
import { Camera } from '@ionic-native/camera';
import {MessageService} from "../services/message.service";

export const firebaseConfig = {
  apiKey: "AIzaSyAPu0jkZsC_L8XOzqeN2ZeRQ-mIEL0F_og",
  authDomain: "cipher-match.firebaseapp.com",
  databaseURL: "https://cipher-match.firebaseio.com",
  projectId: "cipher-match",
  storageBucket: "cipher-match.appspot.com",
  messagingSenderId: "49650682405",
  appId: "1:49650682405:web:92524e726e31244a"
};
firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsResultatPage,
    MenuPage,
    TabsPage,
    ListEquipePage,
    MatchPage,
    SettingsPage,
    DetailEquipePage,
    LoginPage,
    ScreenPage,
    HelpPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name:'MyLocations',
      driverOrder: ['indexeddb', 'sqlite', 'websql']

    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsResultatPage,
    MenuPage,
    TabsPage,
    ListEquipePage,
    MatchPage,
    SettingsPage,
    DetailEquipePage,
    LoginPage,
    ScreenPage,
    HelpPage,

  ],
  providers: [
    StatusBar,
    JoueursService,
    MatchService,
    EquipeService,
    MatchProgramService,
    AuthService,
    MessageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    CallNumber,
    Camera,
  ]
})
export class AppModule {}
