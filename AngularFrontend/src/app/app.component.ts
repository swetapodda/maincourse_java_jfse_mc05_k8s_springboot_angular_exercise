import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
//   message is hold data fetched from backend otherwise error message is assigned
  message = '';
  constructor(private dataService: DataService) {}
//   getData() method to call DataService for fetching data
  getData() {
    this.dataService.getData().subscribe(
      data => {
        this.message = data;
      },
      err => {
        this.message = 'Error in fetching data from backend!!!';
      }
    );
  }
}
