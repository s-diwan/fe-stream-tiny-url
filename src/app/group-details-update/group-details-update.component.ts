import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateGroupCardComponent } from '../create-group-card/create-group-card.component';
import { DataSharedService } from '../services/data-shared.service';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-group-details-update',
  templateUrl: './group-details-update.component.html',
  styleUrls: ['./group-details-update.component.scss']
})
export class GroupDetailsUpdateComponent implements OnInit {
  grpData: any;
  updateGroupForm: FormGroup;
  constructor(private snackBar: MatSnackBar, private dataShared: DataSharedService,
              private group: GroupService, private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: string,
              private dialogRef: MatDialogRef<GroupDetailsUpdateComponent>) {
              this.grpData = this.data;
            }

  ngOnInit(): void {
    this.updateGroupForm = this.formBuilder.group({
      groupName: [this.grpData.grpName],
      groupType:  [this.grpData.grpType]
    });
  }

  get f(): any { return this.updateGroupForm.controls; }

  updateGroup(): void {
    this.group.updateGroup(
      {
        groupName: this.f.groupName.value,
        groupType: this.f.groupType.value
      },
      this.grpData.grpId
    )
    .subscribe(success => {
        this.dataShared.setGroup(true);
        this.openSnackBar('Group Updated', 'Successfully');
      },
      err => {
        this.openSnackBar(err.error.message, '');
      }
    );
  }

  openSnackBar(message, action): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
