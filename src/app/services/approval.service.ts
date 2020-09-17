import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {

  constructor(private http: HttpClient) { }

  getMyApproval(): any{
    return this.http.get('/server/getMyApprovals');
  }

  approve(id: number): Observable<any> {
    return this.http.get(`server/approve/${id}`);
  }

  reject(id: number): Observable<any> {
    return this.http.get(`server/reject/${id}`);
  }

}
