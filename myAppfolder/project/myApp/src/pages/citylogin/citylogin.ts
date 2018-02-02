import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainpagePage } from '../mainpage/mainpage';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

/**
 * Generated class for the CityloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-citylogin',
  templateUrl: 'citylogin.html',
})
export class CityloginPage {
    //components for city login
    responseData : any;
    userData:any = {};
    userres:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AuthserviceProvider) {
  }


  //city selector
  localitylogin(userData){  
    console.log("userData",userData);
    this.authService.citylocalityselector(userData,'localitylogin').then((result) => {
      console.log("Success",result);
     this.responseData = result;
     this.navCtrl.push(CityloginPage);
   }).catch((e)=>{
     console.log("Error",e);
   })

 }

 citylogin(userData){  
  console.log("userData",userData);
  this.authService.cityselector(userData,'citylogin').then((result) => {
    console.log("Success",result);
   this.responseData = result;
   this.navCtrl.push(CityloginPage);
 }).catch((e)=>{
   console.log("Error",e);
 })

}

statelogin(userData){  
  console.log("userData",userData);
  this.authService.stateselector(userData,'citylogin').then((result) => {
    console.log("Success",result);
   this.responseData = result;
   this.navCtrl.push(CityloginPage);
 }).catch((e)=>{
   console.log("Error",e);
 })

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad CityloginPage');
  }
  mainpage() {
    this.navCtrl.push(MainpagePage);
    
   }
}
