import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnrollPage } from '../enroll/enroll';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  clickEnroll() {
    this.navCtrl.push(EnrollPage);
    console.log("ahora deberia miau");
  }
  
}
