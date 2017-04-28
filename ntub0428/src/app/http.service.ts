import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData(url,token) {
    let headers = new Headers({ 'Content-Type': 'application/json' ,'Authorization':'Bearer '+token});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url,options).map(res => res.json())
  }

  postData(url,data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, data, options).map(res => res.json())
  }

}