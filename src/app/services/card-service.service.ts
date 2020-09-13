import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(private http: HttpClient) { }

  getAllCards(): any{
    return this.http.get('/server/getAllCards');
  }

  createCard(card: { url: string, title: string, description: string, cardType: string,  }): Observable<any> {
    return this.http.post<any>('server/createCard', card);
  }
}
