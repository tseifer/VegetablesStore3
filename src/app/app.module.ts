import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import {VegtableListPage} from "../pages/vegtable-list/vegtable-list";
import {VegDetailsPage} from "../pages/veg-details/veg-details";
import {ShoppingBagPage} from "../pages/shopping-bag/shopping-bag";
import {DataService} from "../services/DataService";
import {VeggieComponent} from "../components/veggie/veggie";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    VegtableListPage,
    VegDetailsPage,
    ShoppingBagPage,
    VeggieComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    VegtableListPage,
    VegDetailsPage,
    ShoppingBagPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DataService]
})
export class AppModule {}
