import { Component } from '@angular/core';

/**
 * Generated class for the NewaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'newa',
  templateUrl: 'newa.html'
})
export class NewaComponent {

  text: string;

  constructor() {
    console.log('Hello NewaComponent Component');
    this.text = 'Hello World';
  }
  get(){
    console.log('66666');
  }

}
