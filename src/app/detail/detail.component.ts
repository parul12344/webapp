import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WeatherService } from '../weather.service';
import { environment } from 'src/environments/environment';

const apiKey: string = environment.apiKey;
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  result = [];
  flag: boolean = false;
  constructor(private route: ActivatedRoute, private weather: WeatherService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id: string = params["id"];
      this.weather.getTempDetails(id, false).subscribe(data => {
        this.result = data['list'];
        this.flag = true;
      },
        error => {
          console.log("Error", error);
        });
    });

  }


}
