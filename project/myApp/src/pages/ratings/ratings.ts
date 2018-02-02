import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

/**
 * Generated class for the RatingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ratings',
  templateUrl: 'ratings.html',
})
export class RatingsPage {
 locationId:any;
 hospitals: any=[] ;
 parks: any = [];
 police: any =[];
 schools: any=[] ;
 userData: any =[];
 fetchdatavariable: any;
 location:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthserviceProvider) {
    console.log("we are on ratings page")
    
     // this.locationId=navParams.get('loadData');
  }

  
   // let  x = localStorage.getItem('location');
  
   // let y = JSON.parse(x);
   // this.location = y.location_id; 
   
   ngOnInit(){
    console.log("locality obj....", this.navParams.get("locality"));
      
    let location =  JSON.parse(localStorage.getItem("location"));
    this.fetchData(location);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RatingsPage');
  }
  
 //fetchdata
 fetchData(location) {
  //alert(JSON.stringify(location));
  //{loaction_name: "Indira Nagar", location_id: 20}
  console.log("userData", JSON.stringify(location));
   this.authService.hospitalData(location, 'hospitals').then((result: any) => {
    console.log("Success", result);
    //alert(JSON.stringify(result));
    this.hospitals = result;
    console.log(result);
    // this.navCtrl.push(MainpagePage);
  }).catch((e) => {
    console.log("Error" );
  })
  console.log("userData", location);
  this.authService.parkData(location, 'parks').then((result: any) => {
    console.log("Success", result);
    this.parks = result;

    // this.navCtrl.push(MainpagePage);
  }).catch((e) => {
    console.log("Error", e);
  })

  console.log("userData", location);
  this.authService.policeData(location, 'police').then((result: any) => {
    console.log("Success", result);
    this.police = result;

    // this.navCtrl.push(MainpagePage);
  }).catch((e) => {
    console.log("Error", e);
  })

  console.log("userData", location);
  this.authService.schoolData(location, 'school').then((result: any) => {
    console.log("Success", result);
    this.schools= result.results;
  }).catch((e) => {
    console.log("Error", e);
  })
}

  //this.servicename.subscribe(people => this.people = people);
}
