import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ZhucePage } from '../zhuce/zhuce';
import { NavParams } from 'ionic-angular';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  // change(){
  //   this.navCtrl.push(ZhucePage);
  // }
  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }
  ionViewDidLoad() {
    let profileModal = this.modalCtrl.create(AddPage);
    profileModal.present();
  }
}
