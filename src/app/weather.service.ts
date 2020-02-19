import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  //get json data
  public getJsonData() {
    let filePath = environment.jsonFileURL;
    return this.http.get(filePath);
  }

  public getTempDetails(cityIDs: string, bulk:boolean) {
    if(bulk){
      return this.http.get(`${environment.apiUrl}/group?appid=${environment.apiKey}&id=` + cityIDs);
    } else {
      return this.http.get(`${environment.apiUrl}/forecast?appid=${environment.apiKey}&cnt=16&id=` + cityIDs);
    }   
  }

}
