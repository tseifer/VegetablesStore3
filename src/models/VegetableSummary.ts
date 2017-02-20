import {Vegetable} from "./Vegetable";
/**
 * Created by Tidhar on 10/2/2017.
 */
export class VegetableSummary {

  // amount:number;
  // constructor(name:string,price: number,color:string, imageUrl:string, amountParam:number) {
  //   super(name, price, color, imageUrl);
  //   this.amount = amountParam;
  //
  // }

  constructor(public vegtable:Vegetable, public amount:number){}
  increaseAmount() {
    this.amount++;
  }
  reduceAmount() {
    this.amount--;
  }




}
