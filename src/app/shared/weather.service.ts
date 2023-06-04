import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private _http: HttpClient) { }

  getWeather(city: string, units: string): Promise<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d675147a05f8e8a9343ec5d6a0e6979a&units=${units}`
    return this._http.get(url).toPromise()
  }

}
