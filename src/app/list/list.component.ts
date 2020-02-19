import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';

const apiKey: string = environment.apiKey;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  resultArr = [];
  flag: boolean = false;

  constructor(private weather: WeatherService, private router: Router) { }

  getMetroCityID() {
    let cityIDs: string = '';
    return new Promise((resolve, reject) => {
      this.weather.getJsonData().subscribe(data => {
        Object.values(data).forEach(function (k, v) {
          cityIDs = cityIDs + k['city_id'] + ",";
        });
        console.log(cityIDs);
        resolve(cityIDs);
      });
    });
  }

  getCityTempDetails(cityIDs) {
    return new Promise((resolve, reject) => {
      this.weather.getTempDetails(cityIDs, true).subscribe(data => {
        resolve(data);
      });
    });
  }

  async fetchData() {
    let cityIDs= await this.getMetroCityID();
    let resultArr = await this.getCityTempDetails(cityIDs);
    return resultArr;
  }

  ngOnInit(): void {
    this.fetchData().then((result) => {
      this.flag = true;
      this.resultArr.push(result['list']);
      this.resultArr = this.resultArr[0];
    });
  }

  getCityDetailData(id) {
    this.router.navigate(["detail/" + id]);
  }

}
