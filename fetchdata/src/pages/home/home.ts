import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arralist=[];
  userData:any={};

  constructor(public navCtrl: NavController,public authservice:AuthserviceProvider) {
    this.showData({
      city_id:"city_id"
    });
  }


  showData(userData){  
    console.log("userData",userData);
    this.authservice. postData(userData,'show').then((result:any) => {
      console.log("Success",result);
     this.arralist = result.results;
   }).catch((e)=>{
     console.log("Error",e);
   })

 }
}
