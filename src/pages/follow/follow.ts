import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the FollowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-follow',
  templateUrl: 'follow.html',
})
export class FollowPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowPage');
  }

}
