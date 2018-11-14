import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the APage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-a',
  templateUrl: 'a.html',
})
export class APage {
  // @ViewChild('ac')  ac;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad(){
    // 调用组件的方法，和@ViewChild连用
    // this.ac.get();
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad APage');
  // }

}
