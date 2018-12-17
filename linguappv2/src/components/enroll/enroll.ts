import { Component } from '@angular/core';

/**
 * Generated class for the EnrollComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'enroll',
  templateUrl: 'enroll.html'
})
export class EnrollComponent {

  text: string;

  constructor() {
    console.log('Hello EnrollComponent Component');
    this.text = 'Hello World';
  }

}
