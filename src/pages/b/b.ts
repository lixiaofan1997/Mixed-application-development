import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { CPage } from '../c/c';
import { ShezhiPage } from '../shezhi/shezhi';
/**
 * Generated class for the BPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-b',
  templateUrl: 'b.html',
})
export class BPage {
  // @ViewChild(Slides) slides:Slides;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController, private alertCtrl: AlertController,public navParams: NavParams) {
  }
  goSub(){
    this.navCtrl.push(ShezhiPage);
  }
  change(){
    // console.log(this.slides.getActiveIndex());
    
  }
  presentProfileModal() {
    let profileModal = this.modalCtrl.create(CPage, { userId: 8675309 });
    profileModal.present();
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  ionViewDidLoad() {//生命周期
    // console.log(this.navParams.get('id'));
    
    // console.log(this.slides.getActiveIndex());
  }

}
