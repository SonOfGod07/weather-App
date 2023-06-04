import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weather: any
  public iconURL: string = ''
  public input : string = ''
  public city: string = 'Niceville'
  public units: string = 'imperial'

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeathear()
  }

  getWeathear(clicked?: string) {
    debugger
    if (!this.city) {
      alert("Enter a City name")
      return
    }

    if (clicked) { 
      this.input === '' ?  alert("Enter a City name") :  this.city = this.input
    }

    this._weatherService.getWeather(this.city, this.units).then(res => {
      debugger
      this.weather = res
      this.iconURL = 'https://openweathermap.org/img/wn/' + this.weather.weather[0].icon + '@2x.png'
    })

  }

  onRadioButtonChange() {
    debugger
    if (this.units == 'imperial') {
      this.units = 'metric'
    } else {
      this.units = 'imperial';
    }
    this.getWeathear();
  }

}
