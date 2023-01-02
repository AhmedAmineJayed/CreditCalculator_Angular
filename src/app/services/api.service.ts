import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  baseUrl = 'http://localhost:8080/';
  constructor(private _http: HttpClient) {
  }
  getTypeRequest(url:any, username?:any) {
      console.log("API Service Get Username:"+ username)
      console.log(typeof(username))
      const obj = JSON.parse(username)
      let queryParams = new HttpParams()
      queryParams = queryParams.append("username", username)
    return this._http.get(`${this.baseUrl}${url}`, {params:queryParams}).pipe(map(res => {
      return res;
    }));
  }
  postTypeRequest(url:any, payload?:any, username?:any) {
    let bod = JSON.stringify(payload)

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        responseType:'text',
        Authorization: username
      })
    } 

    // let user = JSON.parse(`{"username" : "${username} "}`)
    
    // var user = {"username": JSON.stringify(username)}

    console.log("Service Username  :"+ typeof(username))
    console.log("Service Typeof Bod" + typeof(payload))
    console.log(bod)
      console.log("User:" + username)
      console.log("concatenation: " + {...payload, username})
    return this._http.post(`${this.baseUrl}${url}`, {...payload, username}).pipe(map(res => {
      console.log("Result:"+res)
      console.log("Username:" + username)
      return res;
    }));
  }
  putTypeRequest(url:any, payload:any) {
    return this._http.put(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }
}
