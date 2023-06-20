import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {

   WeatherData:any;
  constructor(){

  }

  ngOnInit(){
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(){
    let data = JSON.parse('')
  }

  setWeatherData(data:any){
    this.WeatherData = data
  }
}
