import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataService} from "../../services/DataService";

/*
  Generated class for the Weather page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {

  isRainy:boolean = false;
  weatherText:string = '';
  allWeather:string ='';

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds:DataService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }

  ionViewDidEnter() {
     this.ds.getWeather().then((data: any)=> {
       let response = data._body;
       this.allWeather = JSON.stringify(response);
       console.log(JSON.stringify(response));
       this.weatherText = JSON.stringify(response.DailyForecasts[0].Day.IconPhrase);
     });
  }

}
