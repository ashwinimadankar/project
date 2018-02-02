import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CityloginPage } from './citylogin';

@NgModule({
  declarations: [
    CityloginPage,
  ],
  imports: [
    IonicPageModule.forChild(CityloginPage),
  ],
})
export class CityloginPageModule {}
