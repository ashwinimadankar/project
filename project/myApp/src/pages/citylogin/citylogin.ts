import { Component, EventEmitter, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainpagePage } from '../mainpage/mainpage';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { RatingsPage } from '../ratings/ratings';


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
  stateData: any = [];
  cityData: any = [];
  localityData: any = [];
  hospitals: any = [];
  parks: any = [];
  police: any = [];
  schools: any = [];
  userData: any = [];
  fetchdatavariable: any;
  public locality:any[];
  public loc:any;
  public data:any;
  public data1:any;

 // @Output() update = new EventEmitter<any>();


  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthserviceProvider) {

  }

  ionViewWillEnter() {
    this.statelogin({
    });
  }

  //city selector
  localitylogin(city_id, state_id) {
    console.log("userData", city_id);
    this.authService.citylocalityselector({ "city_id": city_id, "state_id": state_id }, 'localitylogin').then((result: any) => {
      console.log("Success", result);
      this.localityData = result.results;
      // this.navCtrl.push(MainpagePage);
    }).catch((e) => {
      console.log("Error", e);
    })

  }

  citylogin(state_id) {
    console.log("userData... state id", state_id);
    this.authService.cityselector({ "state_id": state_id }, 'citylogin').then((result: any) => {
      console.log("Success", result);
      this.cityData = result.results;
    }).catch((e) => {
      console.log("Error", e);
    })
  }

  statelogin(userData) {
    console.log("userData", userData);
    this.authService.stateselector(userData, 'statelogin').then((result: any) => {
      console.log("Success", result);
      this.stateData = result.results;
    }).catch((e) => {
      console.log("Error", e);
    })

  }

 

  abc(loadData) {
     console.log("Load Data:",loadData.loaction_name);
     //localStorage.setItem("location",loadData.loaction_name);
    
     localStorage.setItem("location",JSON.stringify(loadData));

     var data = localStorage.getItem('location');
     console.log("DATA DETECTED:",JSON.parse(data));

     this.data1 = JSON.parse(data);
console.log(this.data1.loaction_name);
//this.navCtrl.push(MainpagePage);


     //this.loc = JSON.stringify(localStorage.getItem('location'));
     
     
    //  console.log("LocalStorage Get Data:",JSON.parse(this.loc));

     //this.data = JSON.parse(this.loc);
     //this.data1 = JSON.stringify(this.data);
     //console.log("Location:",JSON.stringify(JSON.parse(this.loc)));
    // this.locality=loadData;
    //this.locality = JSON.stringify(loadData);

    //console.log("the location Obj:",this.locality);
    // localStorage.setItem('abc123',this.locality);

    // var location2 = localStorage.getItem('abc123');
    // console.log(location2.loaction_name);

    //this.fetchdathe location id istavariable = loadData;
   //this.servicename.todo(loadData)

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CityloginPage');
  }
 mainpage(data) {

  //  this.update.emit(this.fetchdatavariable);
//  this.locality=loadData;
 // console.log("in mainpage function",loadData)
   this.navCtrl.push(MainpagePage,{
     "locality":data
   });

  }
}
