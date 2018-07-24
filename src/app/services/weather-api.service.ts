import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private httpClient : HttpClient) { }

  getWeather(){
   return this.httpClient.get('https://api.apixu.com/v1/current.json?key=a89b1721c3b44eb09de182716182407&q=Jakarta')
  }
}
