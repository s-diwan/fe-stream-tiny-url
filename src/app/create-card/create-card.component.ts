import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CardServiceService } from '../services/card-service.service';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {

  createCardForm: FormGroup;

  constructor(private snackBar: MatSnackBar, private card: CardServiceService,
              private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createCardForm = this.formBuilder.group({
      title: [''],
      description:  [''],
      url: [''],
      cardType:  ['']
    });
  }

  get f(): any { return this.createCardForm.controls; }

  createCard(): void {
    this.card.createCard(
      {
        title: this.f.title.value,
        description: this.f.description.value,
        url: this.f.url.value,
        cardType: this.f.cardType.value
      }
    )
    .subscribe(
      success => {
        this.openSnackBar('Card Created', 'Successfully');
      },
      err => {
        this.openSnackBar(err.error.message, 'Change email');
      });
  }

  openSnackBar(message, action): any {
    this.snackBar.open( message, action, {
      duration: 2000,
    });
  }

}
