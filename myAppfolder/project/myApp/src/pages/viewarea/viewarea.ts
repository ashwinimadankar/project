import { Component , ViewChild ,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 
import { CityloginPage } from '../citylogin/citylogin';
/**
 * Generated class for the ViewareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-viewarea',
  templateUrl: 'viewarea.html',
})
export class ViewareaPage {
  options : GeolocationOptions;
  currentPos : Geoposition;

  @ViewChild('map') mapElement: ElementRef;
map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation : Geolocation) {
  }



 //functions for map
  addMap(lat,long){

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();

}

addMarker(){

  let marker = new google.maps.Marker({
  map: this.map,
  animation: google.maps.Animation.DROP,
  position: this.map.getCenter()
  });

  let content = "<p>This is your current position !</p>";          
  let infoWindow = new google.maps.InfoWindow({
  content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
  infoWindow.open(this.map, marker);
  });

}
  getUserPosition(){
    this.options = {
      enableHighAccuracy : false
      };
      this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {
  
          this.currentPos = pos;     
  
          console.log(pos);
          this.addMap(pos.coords.latitude,pos.coords.longitude);
  
      },(err : PositionError)=>{
          console.log("error : " + err.message);
      ;
      })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewareaPage');
  }
  ionViewDidEnter(){
    this.getUserPosition();
} 

}
