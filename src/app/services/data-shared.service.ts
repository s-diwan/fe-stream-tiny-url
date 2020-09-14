import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {
  private groupSource = new Subject<any>();
  group = this.groupSource.asObservable();

  private loginData = new Subject<any>();
  login = this.loginData.asObservable();

  constructor() { }

  setGroup(group): any{
    this.groupSource.next(group);
  }

  setLoginFlag(login): any{
    console.log('came here');
    this.loginData.next(login);
  }
}
