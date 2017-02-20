import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataService} from "../../services/DataService";
import {Vegetable} from "../../models/Vegetable";

/*
  Generated class for the VegtableList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vegtable-list',
  templateUrl: 'vegtable-list.html'
})
export class VegtableListPage {

  vegList:Vegetable[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService:DataService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VegtableListPage');
    this.vegList = this.dataService.getVegetablesList();
  }

}
