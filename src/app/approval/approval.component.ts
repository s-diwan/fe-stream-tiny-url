import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApprovalService } from '../services/approval.service';
import { DataSharedService } from '../services/data-shared.service';
@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {
  approvalData: any;
  constructor(private dataShared: DataSharedService, private snackBar: MatSnackBar, private approvalService: ApprovalService) { }

  ngOnInit(): void {
    this.getAllApprovals();
    this.dataShared.approval.subscribe(
      data => {
        if (data){
        this.approvalService.getMyApproval().subscribe(
          appdata => {this.approvalData = appdata; },
          err => console.log(err),
          () => console.log('cards data loaded')
        );
      }},
    );
  }

  getAllApprovals(): void{
    this.approvalService.getMyApproval().subscribe(
      data => {
        this.approvalData = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log('cards data loaded')
    );
  }

  approve(approval): any{
    this.approvalService.approve(
      approval.id
    )
    .subscribe(
      data => {
        this.dataShared.setApproval(true);
        this.openSnackBar(data.message, 'Successfully');
      },
      err => {
        this.openSnackBar(err.error.message, 'Error');
      });
  }

  reject(approval): any{
    this.approvalService.reject(
    approval.id
    )
    .subscribe(
      data => {
        this.dataShared.setApproval(true);
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
