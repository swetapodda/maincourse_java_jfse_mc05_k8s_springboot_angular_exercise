import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

// DataService is to call backend service for requesting data
export class DataService {

  constructor(private http: HttpClient) {
  }

//   getData() method is using get() method of HttpClient for fetching data
  getData(): Observable<any> {
    return this.http.get( environment.API + '/message', {responseType: 'text'});
  }
}
