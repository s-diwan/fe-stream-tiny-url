import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CardServiceService } from '../services/card-service.service';
import { DataSharedService } from '../services/data-shared.service';
import { GroupService } from '../services/group.service';


@Component({
  selector: 'app-update-card-form',
  templateUrl: './update-card-form.component.html',
  styleUrls: ['./update-card-form.component.scss']
})
export class UpdateCardFormComponent implements OnInit {
  cardData: any;
  udpateCardForm: FormGroup;

  constructor(private snackBar: MatSnackBar, private card: CardServiceService,
              private formBuilder: FormBuilder, private router: Router,
              private dataShared: DataSharedService,
              @Inject(MAT_DIALOG_DATA) public data: string,
              private dialogRef: MatDialogRef<UpdateCardFormComponent>) {
                this.cardData = this.data;
                console.log(this.cardData);
               }

  ngOnInit(): void {
    this.udpateCardForm = this.formBuilder.group({
      title: [this.cardData.title],
      description:  [this.cardData.description],
      cardType:  [this.cardData.cardType]
    });
  }

  get f(): any { return this.udpateCardForm.controls; }

  updateCard(): void {
    this.card.updateCard(
      {
        id: this.cardData.id,
        url: this.cardData.url,
        title: this.f.title.value,
        description: this.f.description.value,
        cardType: this.f.cardType.value,
        group_id: this.cardData.group_id,
        userId: this.cardData.userId,
      }
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

  openSnackBar(message, action): any {
    this.snackBar.open( message, action, {
      duration: 2000,
    });
  }


}
