import { Component } from '@angular/core';
import {SwUpdate } from '@angular/service-worker';
import {WeatherApiService } from './services/weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  update : boolean = false;
  weather : any;
  constructor(swUpdate : SwUpdate, private wApiService: WeatherApiService){
    swUpdate.available.subscribe(event=>{
      console.log(event)
      this.update = true
    })
  }

  ngOnInit(){
    this.wApiService.getWeather().subscribe(result=>{
      console.log(result);
      this.weather = result;
    })
  }


}
