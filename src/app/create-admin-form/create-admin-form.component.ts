import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateGroupCardComponent } from '../create-group-card/create-group-card.component';
import { AdminService } from '../services/admin.service';
import { CardServiceService } from '../services/card-service.service';

@Component({
  selector: 'app-create-admin-form',
  templateUrl: './create-admin-form.component.html',
  styleUrls: ['./create-admin-form.component.scss']
})
export class CreateAdminFormComponent implements OnInit {
  groupId: any;
  createGroupAdminForm: FormGroup;

  constructor(private admin: AdminService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute,
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
      this.f.userId.value,
      this.groupId.grpId
    )
      .subscribe(success => {
        if (success) {
          // this.router.navigate(['/landing']);
        }
      });
  }

}
