import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(private http: HttpClient) { }

  getAllCards(){
    return this.http.get('/server/getAllCards')
  }
}
