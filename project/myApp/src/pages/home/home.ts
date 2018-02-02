import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { CityloginPage } from '../citylogin/citylogin';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:any = {};
  userData:any;

  constructor(public navCtrl: NavController, public authService:AuthserviceProvider) {
 if ((localStorage.getItem('userData')) != undefined) {
  this.navCtrl.push(CityloginPage); }
  }
  citylogin(userData){ 
    console.log("userData",userData);



    this.authService.postDatalogin(userData,'login').then((result:any) => {
      
      console.log("Success",result);
      console.log("Success",result.success);

     if (result.success) {
      console.log("inside if Success",result.success);

      localStorage.setItem('userData', JSON.stringify(result.token));
      console.log("The value logged in is", result.token);
      this.navCtrl.push(CityloginPage);
      
    }
    else {
      console.log("inside else Success",result.success);
       console.log("Login Failed"); }
    

   }).catch((e)=>{
     console.log("Error",e);
   })

 }
   register() {
    this.navCtrl.push(RegistrationPage);
   
   }

  //  citylogin() {
  //   this.navCtrl.push(CityloginPage);
    
  //  }
}
