import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  arr1=["客厅","卧室","餐厅","书房","门厅"];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  constructor(public navCtrl: NavController) {

  }

}
