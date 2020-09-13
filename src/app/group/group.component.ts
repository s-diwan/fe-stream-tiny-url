import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  public groupsData: any;
  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.getAllGroups();
  }

  getAllGroups(): void{
    this.groupService.getAllGroups().subscribe(
      data => {this.groupsData = data; },
      err => console.log(err),
      () => console.log('cards data loaded')
    );
  }

}
