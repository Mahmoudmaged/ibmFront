import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharityService {
 baseURL = `http://localhost:3000/`;
//  token = localStorage.getItem('token');
  constructor(private _HttpClient: HttpClient , private _Router: Router) { }

  discovery(data: any): Observable<any> {
    console.log("send");
    
    return this._HttpClient.post(this.baseURL + "nlt", data)
  }
}
