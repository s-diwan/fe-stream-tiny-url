import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  signup(user: { firstName: string, lastName: string, gender:string,email:string , password:string }): Observable<any> {
    return this.http.post<any>('server/signup', user);
  }
}
