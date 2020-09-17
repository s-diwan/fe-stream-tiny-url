import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { CreateCardComponent } from '../create-card/create-card.component';
import { CardServiceService } from '../services/card-service.service';
import { DataSharedService } from '../services/data-shared.service';
import { TestService } from '../services/test.service';
import { UpdateCardFormComponent } from '../update-card-form/update-card-form.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public studentData: any;
  public cardsData: any;
  public crdSearch = '';
  constructor(private snackBar: MatSnackBar, public dialog: MatDialog,
              private dataShared: DataSharedService,
              private cardService: CardServiceService, private test: TestService) { }

  ngOnInit(): void {
    this.getUser();
    this.getAllCards();
    this.dataShared.card.subscribe(
      data => {
        if (data){
        this.cardService.getAllCards().subscribe(
          crddata => {this.cardsData = crddata; },
          err => console.log(err),
          () => console.log('cards data loaded')
        );
      }},
    );
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

  deleteCard(card): any{
    this.cardService.deleteCard(
      {
        id: card.id,
        group_id: card.group_id,
        userId: card.userId,
      },
      card.id
    )
    .subscribe(
      data => {
        this.dataShared.setCard(true);
        this.openSnackBar(data.message, 'Successfully');
      },
      err => {
        this.openSnackBar(err.error.message, 'Error');
      });
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

  openCardUpdateDialog(card): void {
    const dialogRef = this.dialog.open(UpdateCardFormComponent, {
      height: '400px',
      width: '400px',
      data: {id: card.id, url: card.url, title: card.title, description: card.description,
            cardType: card.cardType, group_id: card.group_id, userId: card.userId }
          });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openSnackBar(message, action): any {
    this.snackBar.open( message, action, {
      duration: 2000,
    });
  }

}
