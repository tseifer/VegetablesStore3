import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataService} from "../../services/DataService";
import {Vegetable} from "../../models/Vegetable";
import {VegetableSummary} from "../../models/VegetableSummary";

/*
  Generated class for the ShoppingBag page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shopping-bag',
  templateUrl: 'shopping-bag.html'
})
export class ShoppingBagPage {

  shoppingBag:VegetableSummary[] = [];
  totalPrice:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService:DataService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingBagPage');
  }
  ionViewDidEnter() {
    this.shoppingBag = this.dataService.getShoppingBag();
    this.totalPrice = this.shoppingBag.reduce((total, vegSummary) => {
      return total + (vegSummary.vegtable.price * vegSummary.amount);
    }, 0);

    // let total = 0; for (let v of this.shoppingBag) {total = total + v.price}}
  }

  onRemove(vegToRemove:Vegetable) {

  }

}
