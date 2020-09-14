import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.scss']
})
export class GroupInfoComponent implements OnInit {
  public grpData: any;
  constructor( private grpService: GroupService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getGrpInfo(this.route.snapshot.params.id);
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

}
