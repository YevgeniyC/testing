import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private apiUrl = '';
  private token = "";

  constructor(private http: Http) { }

  getData() {
   let headers = new Headers();
 
    headers.append('Authorization', 'Bearer ' + this.token);
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:8100/home');

    return this.http.get(this.apiUrl, {headers: headers}).map(res => res.json());
  }
}
