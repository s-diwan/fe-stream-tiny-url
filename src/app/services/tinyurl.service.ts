import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TinyurlService {

  constructor(private http: HttpClient) { }

  createTinyUrl(url: string): any {
    return this.http.post<any>('server/createTinyUrl', url);
  }
}
