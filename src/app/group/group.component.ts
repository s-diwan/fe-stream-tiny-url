import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
import {MatDialog} from '@angular/material/dialog';
import { GroupDetailsComponent } from '../group-details/group-details.component';
import { DataSharedService } from '../services/data-shared.service';
import { GroupDetailsUpdateComponent } from '../group-details-update/group-details-update.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  public groupsData: any;
  public grpSearch = '';
  constructor(private snackBar: MatSnackBar, public dialog: MatDialog,
              private dataShared: DataSharedService,
              private groupService: GroupService) { }

  ngOnInit(): void {
    this.getAllGroups();
    this.dataShared.group.subscribe(
      data => {
        if (data){
        this.groupService.getAllGroups().subscribe(
          grpdata => {this.groupsData = grpdata; },
          err => console.log(err),
          () => console.log('cards data loaded')
        );
      }},
    );
  }

  getAllGroups(): void{
    this.groupService.getAllGroups().subscribe(
      data => {
        this.groupsData = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log('cards data loaded')
    );
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(GroupDetailsComponent, {
      height: '300px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateDialog(group): void {
    const dialogRef = this.dialog.open(GroupDetailsUpdateComponent, {
      height: '300px',
      width: '300px',
      data: { grpId: group.id, grpName: group.groupName, grpType: group.groupType }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteGroup(group): any{
    this.groupService.deleteGroup(
      group.id
    )
    .subscribe(
      data => {
        this.dataShared.setGroup(true);
        this.openSnackBar('Deleted', 'Successfully');
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
