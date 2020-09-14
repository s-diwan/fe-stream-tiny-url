import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getAllGroups(): any{
    return this.http.get('/server/getAllGroups');
  }

  getGroup(id: number): any{
    return this.http.get('/server/groups/' + id);
  }

  createGroup(group: { groupName: string, groupType: string }): Observable<any> {
    return this.http.post<any>('server/createGroup', group);
  }
}
