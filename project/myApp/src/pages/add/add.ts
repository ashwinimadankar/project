import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import {ProfilePage} from '../profile/profile';
/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  responseData : any;
  userData:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AuthserviceProvider) {
  }

//service call function
ratingData(userData){
 
    console.log("userData",userData);
    this.authService.ratingtaDa(userData,'rating').then((result) => {
      console.log("Success",result);
     this.responseData = result;
   }).catch((e)=>{
     console.log("Error",e);
   })

 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
