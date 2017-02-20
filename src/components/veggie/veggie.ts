import {Component, Input} from '@angular/core';
import {Vegetable} from "../../models/Vegetable";
import {DataService} from "../../services/DataService";
import {NavController} from "ionic-angular";
import {VegDetailsPage} from "../../pages/veg-details/veg-details";

/*
  Generated class for the Veggie component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'veggie',
  templateUrl: 'veggie.html'
})
export class VeggieComponent {

  @Input()
  vegg:Vegetable;

  constructor(private ds:DataService, private navCtrl:NavController) {

  }
  addWasClicked() {
    this.ds.addToBag(this.vegg);
  }
  detailsWasClicked() {
    //let myObject = {kuku: 'jhgfhjgjh', price: 654, vegToShow: this.vegg};
    this.navCtrl.push(VegDetailsPage, this.vegg);
  }

}
