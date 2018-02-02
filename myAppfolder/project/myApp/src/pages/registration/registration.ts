import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { HomePage } from '../../pages/home/home';
import { CityloginPage } from '../citylogin/citylogin';


@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  responseData : any;
  userData:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthserviceProvider) {
  }

  
  registration(userData){



    
    console.log("userData",userData);
    this.authService.postData(userData,'register').then((result) => {
      console.log("Success",result);
     this.responseData = result;
     this.navCtrl.push(HomePage);
   }).catch((e)=>{
     console.log("Error",e);
   })

 }
  login(){
    this.navCtrl.push(CityloginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
