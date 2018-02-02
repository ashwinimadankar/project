import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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
  cityloginRoot ='CityloginPage'
  profileRoot ='ProfilePage'
  addRoot ='AddPage'


  constructor(public navCtrl: NavController) {}

}
