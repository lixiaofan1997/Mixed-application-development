import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the CPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-c',
  templateUrl: 'c.html',
})
export class CPage {

  constructor(public navCtrl: NavController,params: NavParams ,public navParams: NavParams) {
    console.log('UserId', params.get('userId'));
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CPage');
  }

}
