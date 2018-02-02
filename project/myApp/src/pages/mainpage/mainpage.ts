import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the MainpagePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainpage',
  templateUrl: 'mainpage.html'
})
export class MainpagePage {

 
  viewareaRoot = 'ViewareaPage'
  ratingsRoot = 'RatingsPage'
  profileRoot ='ProfilePage'
  addRoot ='AddPage'

 // @Input() update : any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }
  ngOnInit(){
    console.log("locality obj....", this.navParams.get("locality"));
    localStorage.setItem("location",JSON.stringify(this.navParams.get("locality")));
  }


}
