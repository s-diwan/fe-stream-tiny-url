import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {
 constructor(private http: HttpClient) { }
 getStudent(): Observable<any> {
   return this.http.get('/server/user/1');
 }
}
