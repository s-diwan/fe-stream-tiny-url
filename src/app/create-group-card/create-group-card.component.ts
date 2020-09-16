import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CardServiceService } from '../services/card-service.service';
import { DataSharedService } from '../services/data-shared.service';

@Component({
  selector: 'app-create-group-card',
  templateUrl: './create-group-card.component.html',
  styleUrls: ['./create-group-card.component.scss']
})
export class CreateGroupCardComponent implements OnInit {
  groupId: any;
  createGroupCardForm: FormGroup;

  constructor(private card: CardServiceService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: string,
              private dialogRef: MatDialogRef<CreateGroupCardComponent> ) {
              this.groupId = data;
            }

  ngOnInit(): void {
    this.createGroupCardForm = this.formBuilder.group({
      title: [''],
      description:  [''],
      url: [''],
      cardType:  ['']
    });
  }

  get f(): any { return this.createGroupCardForm.controls; }

  createGroupCard(): void {
    console.log(this.groupId);
    this.card.createGroupCard(
      {
        title: this.f.title.value,
        description: this.f.description.value,
        url: this.f.url.value,
        cardType: this.f.cardType.value
      },
      this.groupId.grpId
    )
    .subscribe(success => {
      if (success) {
        // this.router.navigate(['/landing']);
      }
    });
  }
}
