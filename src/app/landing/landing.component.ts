import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCardComponent } from '../create-card/create-card.component';
import { CardServiceService } from '../services/card-service.service';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public studentData: any;
  public cardsData: any;
  constructor(public dialog: MatDialog, private cardService: CardServiceService, private test: TestService) { }

  ngOnInit(): void {
    this.getUser();
    this.getAllCards();
  }

  getUser(): void {
    this.test.getStudent().subscribe(
      data => {this.studentData = data; },
      err => console.log(err),
      () => console.log('user data loaded')
    );
  }

  getAllCards(): void{
    this.cardService.getAllCards().subscribe(
      data => {this.cardsData = data; },
      err => console.log(err),
      () => console.log('cards data loaded')
    );
  }

  openDialog(): any {
    const dialogRef = this.dialog.open(CreateCardComponent, {
      height: '400px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
