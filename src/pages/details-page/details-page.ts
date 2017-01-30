import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'details-page.html'
})
export class DetailsPage {

	item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPagePage');
  }

}
