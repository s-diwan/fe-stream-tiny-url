import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
import {MatDialog} from '@angular/material/dialog';
import { GroupDetailsComponent } from '../group-details/group-details.component';
import { DataSharedService } from '../services/data-shared.service';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  public groupsData: any;
  public grpSearch: string;
  constructor(public dialog: MatDialog, private dataShared: DataSharedService, private groupService: GroupService) { }

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
      data => {this.groupsData = data; },
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

}
