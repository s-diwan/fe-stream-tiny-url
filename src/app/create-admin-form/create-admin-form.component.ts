import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateGroupCardComponent } from '../create-group-card/create-group-card.component';
import { AdminService } from '../services/admin.service';
import { CardServiceService } from '../services/card-service.service';
import { DataSharedService } from '../services/data-shared.service';

@Component({
  selector: 'app-create-admin-form',
  templateUrl: './create-admin-form.component.html',
  styleUrls: ['./create-admin-form.component.scss']
})
export class CreateAdminFormComponent implements OnInit {
  groupId: any;
  createGroupAdminForm: FormGroup;

  constructor(private snackBar: MatSnackBar, private admin: AdminService,
              private dataShared: DataSharedService, private formBuilder: FormBuilder,
              private router: Router, private route: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: string,
              private dialogRef: MatDialogRef<CreateGroupCardComponent>) {
              this.groupId = data;
            }
  ngOnInit(): void {
    this.createGroupAdminForm = this.formBuilder.group({
      userId: ['']
    });
  }

  get f(): any { return this.createGroupAdminForm.controls; }

  createGroupAdmin(): void {
    console.log(this.groupId);
    this.admin.createGroupAdmin(
      this.groupId.grpId,
      this.f.userId.value
    )
      .subscribe(success => {
        this.dataShared.setAdmin(true);
        this.openSnackBar('Admin Added', 'Successfully');
      },
      err => {
        this.openSnackBar(err.error.message, 'Error');
      });
    }

  openSnackBar(message, action): any {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
