import { NgModule } from '@angular/core';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
  ],
  imports: [
    IonicPageModule.forChild(LoginPage ),
    IonicModule.forRoot(LoginPage, {
      scrollPadding: false,
      scrollAssist: false,
      autoFocusAssist: false,

    })
  ],
})
export class LoginPageModule {}
