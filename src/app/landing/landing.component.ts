import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public studentData: any;
  constructor(private test: TestService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.test.getStudent().subscribe(
      data => {this.studentData = data; },
      err => console.log(err),
      () => console.log('user data loaded')
    );
  }

}
