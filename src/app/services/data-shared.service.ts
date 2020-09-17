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

  private cardSource = new Subject<any>();
  card = this.cardSource.asObservable();

  private approvalSource = new Subject<any>();
  approval = this.approvalSource.asObservable();

  private adminSource = new Subject<any>();
  admin = this.adminSource.asObservable();

  private grpCardSource = new Subject<any>();
  grpCard = this.grpCardSource.asObservable();

  constructor() { }

  setgrpCard(grpCard): any{
    this.grpCardSource.next(grpCard);
  }

  setAdmin(admin): any{
    this.adminSource.next(admin);
  }

  setApproval(approval): any{
    this.approvalSource.next(approval);
  }

  setGroup(group): any{
    this.groupSource.next(group);
  }

  setCard(card): any{
    this.cardSource.next(card);
  }

  setLoginFlag(login): any{
    console.log('came here');
    this.loginData.next(login);
  }
}
