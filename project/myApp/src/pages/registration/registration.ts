import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { HomePage } from '../../pages/home/home';
import { CityloginPage } from '../citylogin/citylogin';
import {FormBuilder,Validators,FormGroup,AbstractControl,FormControl} from"@angular/forms";

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  responseData : any;
  userData:any = {};
  public btnIsEnable = true;
  registerData:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthserviceProvider,private formbuild:FormBuilder) {
    // this.registerData = this.formbuild.group({
    //   "name":["",Validators.compose([Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z" "]*')])]
  
    // });



  }

 validationCheck(data){

    
    if(this.userData.password != "" &&  this.userData.password != undefined){
      this.btnIsEnable = false;}
   
        
    
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
