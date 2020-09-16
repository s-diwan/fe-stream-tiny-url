import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TinyurlService } from '../services/tinyurl.service';

@Component({
  selector: 'app-tiny-url-pop',
  templateUrl: './tiny-url-pop.component.html',
  styleUrls: ['./tiny-url-pop.component.scss']
})
export class TinyUrlPopComponent implements OnInit {
  tinyData: any;
  value: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
              private dialogRef: MatDialogRef<TinyUrlPopComponent>) {
    this.tinyData = this.data;
    this.value = this.tinyData;
   }

  ngOnInit(): void {
  }
}
