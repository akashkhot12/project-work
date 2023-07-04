import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
 city!:string;
 weatherData:any;
 src:string="";
  time : any ; 
 yourDate:any

 constructor(private weatherService:WeatherService){
  let now = new Date();
  this.time = now.toLocaleString();
 }


 ngOnInit(){

 }

 getImage(){
  if(this.weatherData.weather[0].main === 'Clouds'){
    this.src = "../../assets/image/clipart3532095.png" ; 
  }else{
    this.src = "../../assets/image/storm.png" ;
  }
 }
 getWeather(){
  this.weatherService.getWeather(this.city)
  .subscribe(data=>{
    this.weatherData=data;
    this.getImage()
    console.log(data);
    
  })
 }
 
}
