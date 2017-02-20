import {Injectable} from "@angular/core";
import {Vegetable} from "../models/Vegetable";
import {VegetableSummary} from "../models/VegetableSummary";


@Injectable()
export class DataService {

  private vegetableList:Vegetable[] = [];
  private shoppingBag:VegetableSummary[] = [];
  public count:number = 0;


  constructor() {
    this.vegetableList = [
      new Vegetable("tomato", 12, "red", "./assets/images/tomato.jpg"),
      new Vegetable("cucumber", 4, "green", "./assets/images/cucumber.jpg"),
      new Vegetable("Eggplant", 7, "purple", "./assets/images/eggplant.jpg"),
      new Vegetable("Carrot", 8, "orange", "./assets/images/carrot.jpg")
    ];
  }

  addToBag(veg:Vegetable) {
    console.log("Added this vegetable" + veg.name);
    let result:VegetableSummary[] = this.shoppingBag.filter((vegSum)=>(vegSum.vegtable===veg));

    if (result.length === 0) {
      this.shoppingBag.push(new VegetableSummary(veg, 1));
    } else {
      result[0].increaseAmount();
    }
    this.count++;

  }
  removeFromBag(vegSum:VegetableSummary) {
    console.log("remove this vegetable" + vegSum.vegtable.name);
    if(vegSum.amount > 1) {
      vegSum.reduceAmount();
      //vegSum.amount--;
    } else {
      let index = this.shoppingBag.indexOf(vegSum);
      if (index > -1) {
        this.shoppingBag.splice(index, 1);
      }
    }
    this.count--;

  }


  getVegetablesList():Vegetable[] {
    return this.vegetableList;
  }
  getShoppingBag() {
    return this.shoppingBag;
  }




}
