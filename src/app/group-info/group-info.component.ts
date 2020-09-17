import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CreateAdminFormComponent } from '../create-admin-form/create-admin-form.component';
import { CreateGroupCardComponent } from '../create-group-card/create-group-card.component';
import { DataSharedService } from '../services/data-shared.service';
import { GroupService } from '../services/group.service';


@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.scss']
})
export class GroupInfoComponent implements OnInit {
  public grpData: any;
  constructor(public dialog: MatDialog, private dataShared: DataSharedService,
              private grpService: GroupService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getGrpInfo(this.route.snapshot.params.id);
    this.dataShared.admin.subscribe(
      data => {
        if (data){
        this.grpService.getGroup(this.route.snapshot.params.id).subscribe(
          datum => {this.grpData = datum; },
          err => console.log(err),
          () => console.log('cards data loaded')
        );
      }},
    );
  }

  getGrpInfo(id: number): any {
    this.grpService.getGroup(id).subscribe(
      data => {
        this.grpData = data;
      },
      err => console.log(err),
      () => console.log('Group Data Loaded')
    );
  }

  openDialog(): any {
    const dialogRef = this.dialog.open(CreateGroupCardComponent, {
      height: '400px',
      width: '400px',
      data: { grpId: this.grpData.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openAdminDialog(): any {
    const dialogRef = this.dialog.open(CreateAdminFormComponent, {
      height: '250px',
      width: '300px',
      data: { grpId: this.grpData.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
