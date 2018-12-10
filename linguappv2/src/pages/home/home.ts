import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Enroll } from '../enroll/enroll';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  //clickEnroll(){
  //  this.navCtrl.push('HomePage');
  //}

  // IF NOT LAZY-LOADED
  clickEnroll(){
    this.navCtrl.push(Enroll);
  }
}
