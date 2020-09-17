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

  getMyCards(): any{
    return this.http.get('/server/getMyCards');
  }
  createCard(card: { url: string, title: string, description: string, cardType: string }): Observable<any> {
    return this.http.post<any>('server/createCard', card);
  }

  createGroupCard(card: { url: string, title: string, description: string, cardType: string }, id: number): Observable<any> {
    return this.http.post<any>(`server/createCard/group/${id}`, card);
  }

  updateCard(card: { id: number, url: string, title: string, description: string,
            cardType: string, group_id: number, userId: number }): Observable<any> {
    return this.http.put<any>('server/updateCard', card);
  }

  deleteCard( card: {id: number, group_id: number, userId: number }, id: number): Observable<any> {
    return this.http.post<any>(`server/deleteCard/${id}`, card) ;
  }
}
