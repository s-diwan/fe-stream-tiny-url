import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public token: any;
  flag:boolean=false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    if(this.authService.getJwtToken()){
      this.flag=true;
    }
  }

  logOut() {
    this.authService.logout();
    this.flag=false
  }
}
