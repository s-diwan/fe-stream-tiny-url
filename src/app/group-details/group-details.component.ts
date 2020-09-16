import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataSharedService } from '../services/data-shared.service';
import { GroupService } from '../services/group.service';
import { SignUpService } from '../services/sign-up.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {
  createGroupForm: FormGroup;
  constructor(private snackBar: MatSnackBar, private dataShared: DataSharedService,
              private group: GroupService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createGroupForm = this.formBuilder.group({
      groupName: [''],
      groupType:  ['']
    });
  }

  get f(): any { return this.createGroupForm.controls; }

  createGroup(): void {
    this.group.createGroup(
      {
        groupName: this.f.groupName.value,
        groupType: this.f.groupType.value
      }
    )
    .subscribe(success => {
        this.dataShared.setGroup(true);
        this.openSnackBar('Group Created', 'Successfully');
    },
    err => {
      this.openSnackBar(err.error.message, '');
    });
  }

  openSnackBar(message, action): any {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
