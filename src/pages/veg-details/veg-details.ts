import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Vegetable} from "../../models/Vegetable";

/*
  Generated class for the VegDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-veg-details',
  templateUrl: 'veg-details.html'
})
export class VegDetailsPage {

  currentVeg: Vegetable;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //let myObject = {kuku: 'jhgfhjgjh', price: 654, vegToShow: this.vegg};
    //this.navCtrl.push(VegDetailsPage, myObject);
    this.currentVeg = navParams.data;//get('vegToShow');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VegDetailsPage');
  }


}
