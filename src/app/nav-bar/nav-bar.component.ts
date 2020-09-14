import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataSharedService } from '../services/data-shared.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public token: any;
  flag: any = false;
  constructor(private authService: AuthService, private dataShared: DataSharedService) { }

  ngOnInit(): void {
    if (this.authService.getJwtToken()){
      this.flag = true;
    }

    this.dataShared.login.subscribe(
      data => {
        if (data){
          console.log(data + 'flag');
          this.flag = true;
      }},
    );
  }

  logOut(): void {
    this.authService.logout();
    this.flag = false;
  }
}
