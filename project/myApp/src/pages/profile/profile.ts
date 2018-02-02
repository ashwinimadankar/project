import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 personaldetail:any=[];
 userId:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthserviceProvider) {
    this.call();
  }
call(){
    console.log("the data is of");
    console.log(JSON.parse(localStorage.getItem('userData')));
    console.log("the data is of");
  let userData =  JSON.parse(localStorage.getItem('userData'));
  console.log("the data is of",userData);

  console.log();
 // this.personaldetails(JSON.parse(localStorage.getItem('userData')));
 this.personaldetails(userData);
}

     personaldetails(userData){  
    console.log("userData2w34",userData);
    this.authService.userprofile({"id":userData},'userprofile').then((result) => {
      console.log("Success",result);
     
     this.personaldetail = result;
     alert(JSON.stringify(result));
    // this.navCtrl.push(MainpagePage);
   }).catch((e)=>{
     console.log("Error",e);
   })

 }

  goToBack(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
