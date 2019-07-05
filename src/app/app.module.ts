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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsResultatPage,
    MenuPage,
    TabsPage,
    ListEquipePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsResultatPage,
    MenuPage,
    TabsPage,
    ListEquipePage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    JoueursService,
    MatchService,
    EquipeService,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
