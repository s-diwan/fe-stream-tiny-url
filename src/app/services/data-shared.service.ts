import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {
  private groupSource = new Subject<any>();
  group = this.groupSource.asObservable();
  constructor() { }
  setGroup(group): any{
    this.groupSource.next(group);
  }
}
