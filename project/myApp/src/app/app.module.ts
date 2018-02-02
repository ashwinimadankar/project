import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/registration/registration';
import { CityloginPage } from '../pages/citylogin/citylogin';
import { MainpagePage } from '../pages/mainpage/mainpage';
import { HttpModule } from '@angular/http';
import { AuthserviceProvider } from '../providers/authservice/authservice';
import {HttpClientModule} from '@angular/common/http';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 
import {FormBuilder,Validators,FormGroup,AbstractControl,FormControl} from "@angular/forms";
//import { AddPage } from '../pages/add/add';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
    CityloginPage,
    MainpagePage
    //AddPage
   

  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:" Go Back"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrationPage,
    CityloginPage,
    MainpagePage
    //AddPage

   

  ],
  providers: [
    StatusBar,AuthserviceProvider,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
