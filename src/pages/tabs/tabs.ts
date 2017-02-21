import { Component } from '@angular/core';


import {VegtableListPage} from "../vegtable-list/vegtable-list";
import {ShoppingBagPage} from "../shopping-bag/shopping-bag";
import {DataService} from "../../services/DataService";
import {WeatherPage} from "../weather/weather";

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  tab1Root: any = VegtableListPage;
  tab2Root: any = ShoppingBagPage;
  tab3Root: any = WeatherPage;

  count:number = 0;

  constructor(public ds:DataService) {
    //ds.count;
  }
}
