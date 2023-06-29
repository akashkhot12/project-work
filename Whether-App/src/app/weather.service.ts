import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKeys='54ce410dcafc65cdec7c4a58bedf17a7';

  constructor(private http:HttpClient) {}

    getWeather(city:String){
      return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={this.apiKey}`)
    
   }
}
